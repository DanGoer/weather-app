import React from "react";
import { ContactI } from "../../../types/interfaces";

function ContactTitle({ title }: ContactI) {
  return <h2 className="color-hover text-white pb-8">{title}</h2>;
}

export default ContactTitle;
