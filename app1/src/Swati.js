import React from "react";

export function Swati() {
  return <h1>Hello World</h1>;
}
export function Swati1() {
  let abc = "Welcome to React";
  let person = {
    fname: "Curtis",
    lname: "Stevens",
    tel: "(376)485-6084",
    address: "5339 Lectus Dr",
    city: "St. Louis",
    state: "OR",
    zip: 28493
  };
  return (
    <ul>
      {Object.keys(person).map(key => {
        return (
          <li>
            {key} :{person[key]}
          </li>
        );
      })}
    </ul>
  );
}

// export default Swati1;
