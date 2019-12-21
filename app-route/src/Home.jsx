import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Component</h1>
      <button>
        <Link to="/about">Go To About</Link>
      </button>
    </div>
  );
}
