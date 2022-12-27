import React from "react";
import { Cardcat } from "./cards/Cardcat";
import { CreditTrans } from "./cards/CreditTrans";
import { DebitTrans } from "./cards/DebitTrans";

export const Cards = () => {
  return (
    <React.Fragment>
      <Cardcat />
      <DebitTrans />
      <CreditTrans />
    </React.Fragment>
  );
};
