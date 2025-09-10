import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { posts } from "../postData";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase()) ||
      post.content.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto p-4">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />{" "}
        {filteredPosts.map((post) => (
          <div key={post.id} className="mb-4 p-4 bg-white rounded shadow">
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-2xl font-semibold text-pink-500 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-500">{post.date}</p>
          </div>
        ))}
      </div>
    </>
  );
}
