import React from "react";
import { ContactI } from "../../../types/interfaces";

function ContactTextArea({ placeholder }: ContactI) {
  return (
    <div className="w-full relative">
      <textarea className="peer h-96 pt-2 px-1" placeholder={placeholder} />
      <label>{placeholder}</label>
    </div>
  );
}

export default ContactTextArea;
