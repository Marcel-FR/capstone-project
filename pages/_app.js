import GlobalStyle from "@/styles";
import Head from "next/head";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [formData, setFormData] = useLocalStorageState("formData", {defaultValue:[]})
  function handleAddFormData(newFormData) {
    setFormData(newFormData)
  }
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>DnD Companion</title>
      </Head>
      <Component {...pageProps} data={formData} onAddFormData={handleAddFormData} />
    </>
  );
}
