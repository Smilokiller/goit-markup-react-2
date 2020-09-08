import React from "react";

export function ContactList(prop) {
  return (
    <>
      <li key={prop.contactsList.id}>
        {prop.contactsList.name}: {prop.contactsList.number}
        <button onClick={() => prop.onClick(prop.contactsList.id)}>
          DELETE
        </button>
      </li>
    </>
  );
}
