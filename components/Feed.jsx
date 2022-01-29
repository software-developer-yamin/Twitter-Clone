import { SparklesIcon } from "@heroicons/react/outline";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import FeedInput from "./FeedInput";
import FeedPost from "./FeedPost";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () => (
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
      [db]
    )
  );

  return (
    <div className="flex-grow border-x border-gray-700 xl:ml-[370px] max-w-2xl sm:ml-[73px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-gray-700 border-b">
        <h2 className="font-bold text-lg sm:text-xl">Home</h2>
        <div className="hoverAnimation w-9 h-9 flex justify-center items-center px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
      <FeedInput />
      <div className="pb-72">
        {posts.map((post) => (
          <FeedPost key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
