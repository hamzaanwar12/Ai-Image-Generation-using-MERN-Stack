import React from "react";
import { Loader } from "../utitlis/index.js";
import { useState, useEffect } from "react";
import { RenderCards } from "../utitlis/index.js";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState(null);
  const [allPosts, setallPosts] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  useEffect(() => {
    try {
      const fetchPosts = async () => {
        setLoading(true);

        const response = await fetch("http://localhost:3000/api/v1/post/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          setallPosts(result.data.reverse());
        }
      };
    } catch (error) {
      console.log("Errotr i  fetrching the all Shared posts");
      alert("Posts Couldn't Fetched");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = (event) => 
  {
    
    clearTimeout(searchTimeout);
    setSearchText(event.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);
      }, 500),
    );

  };

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
        <input
          className="outline-0 w-full border px-4 italic border-gray-300/50 h-[1.75rem] bg-slate-50 text-gray-800 italics"
          name={"search"}
          type={"text"}
          value={searchText}
          placeholder={"Search Posts"}
          onChange={handleSearch}
        />
      </div>
      {loading ? <Loader /> : <div></div>}
      {searchText ? (
        <RenderCards data={allPosts} title={"No Search Post Result Found"} />
      ) : (
        <RenderCards data={allPosts} title={"No Post Found"} />
      )}
    </div>
  );
}
