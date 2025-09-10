import { useState } from "react";
import { posts } from "../postData";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchText.toLowerCase()) ||
      post.content.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Header />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      <div className="grid gap-6">
        {filteredPosts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl shadow-lg bg-white hover:bg-pink-50 hover:scale-[1.02] transform transition-all duration-300"
          >
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-xl font-bold text-pink-600">{post.title}</h2>
              <p className="text-gray-500 text-sm">{post.date}</p>
              <p className="mt-2 text-gray-700">Click to read more 💖</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
