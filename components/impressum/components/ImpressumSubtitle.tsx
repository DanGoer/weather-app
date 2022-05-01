import React from "react";
import { ImpressumI } from "../../../types/interfaces";

function ImpressumSubtitle({ subtitle }: ImpressumI) {
  return <h3 className="text-2xl font-semibold">{subtitle}:</h3>;
}

export default ImpressumSubtitle;
