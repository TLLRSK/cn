import React from "react";

function Info() {
  return (
    <label htmlFor="info" className="h-fit">
      <input
        type="checkbox"
        name="info"
        id="info"
        className="absolute appearance-none"
      />
      <span className="uppercase text-xs font-medium">info</span>
    </label>
  );
}

export default Info;
