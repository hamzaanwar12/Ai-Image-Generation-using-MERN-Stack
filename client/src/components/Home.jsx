import React from "react";
import { Loader } from "../utitlis/index.js";
import { useState } from "react";
import FormField from "./FormField";
import {RenderCards} from "../utitlis/index.js";
export default function Home() {
  const [loading, setLoading] = useState(false);


  const [searchText, setSearchText] = useState(null);

  return (
    <div className="md:w-[65%] md:mt-[4%] md:mx-auto">
      <div className="w-[100%] ">
        <h1 className="font-bold text-2xl tracking-wide">
          The Community Showcase
        </h1>
        <p className="text-sm mt-2 text-gray-500">
          Browse through a collection of imaginative and visullay stunning
          images generated by DALL-E AI
        </p>
      </div>
      <div className="mt-[5%]">
        <FormField />
      </div>
      {loading ? <Loader /> : <div></div>}
      {searchText ? (
        <RenderCards data={[]} title={"No Search Post Result Found"} />
      ) : (
        <RenderCards data={[]} title={"No Post Found"} />
      )}
    </div>
  );
}
