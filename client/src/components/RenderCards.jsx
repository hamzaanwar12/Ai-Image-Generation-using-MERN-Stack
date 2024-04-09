import React from "react";
import Card from "./Card";
export default function RenderCards({ data, title }) {
  if (data.length > 0)
    return data.map((element) => <Card data={element.data} />);

  return (
    <div className="mt-[5%] w-[100%">
      <h1 className="text-lg text-purple-800 font-bold ">{title}</h1>
    </div>
  );
}
