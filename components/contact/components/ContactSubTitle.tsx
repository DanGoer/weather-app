import React from "react";
import { ContactI } from "../../../types/interfaces";

function ContactSubTitle({ subtitle }: ContactI) {
  return <h3 className="text-lg">{subtitle}</h3>;
}

export default ContactSubTitle;
