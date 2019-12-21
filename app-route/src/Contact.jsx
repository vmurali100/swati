// import React from "react";

// export default function Contact() {
//   return (
//     <div>
//       <h1>Contant Component</h1>
//     </div>
//   );
// }

import React, { Component } from "react";
import axios from "axios";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contant Component</h1>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res.data);
    });
  }
}
