import React, { createContext } from "react";
import ChildB from "./ChildB";
const FirstName = createContext();
const LastName = createContext();

const ChildA = () => {
  const data = "Amit";
  const data1 = "kumar";
  return (
    <div>
      <FirstName.Provider value={data}>
        <LastName.Provider value={data1}>
          <ChildB />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  ); 
};

export default ChildA;
export {FirstName, LastName}
