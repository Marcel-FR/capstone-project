import Link from "next/link";

export default function MonsterHeader(props) {
  const { monster } = props;

  return (
    <div className="monster-header">
      <h1 className="title">{monster.name}</h1>
      <Link href="/bestiary">Back</Link>
    </div>
  );
}
