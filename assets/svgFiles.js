// The knowledge about the correct import/export and styling of the SVGs was taken from various websites on the Internet.

// Header section

export function backArrowIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      width="30"
      viewBox="0 0 48 48"
      {...props}
    >
      <path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z" />
    </svg>
  );
}

export function searchIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      width="30"
      viewBox="0 0 48 48"
      {...props}
    >
      <path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z" />
    </svg>
  );
}

export function addIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 96 960 960"
      width="48"
      {...props}
    >
      <path d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z" />
    </svg>
  );
}

export function editIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 96 960 960"
      width="48"
      {...props}
    >
      <path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z" />
    </svg>
  );
}

// More SVG sections to come..
