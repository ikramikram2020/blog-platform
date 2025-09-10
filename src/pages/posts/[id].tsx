import { useRouter } from "next/router";
import { posts } from "../../postData";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 text-center">
        <h1 className="text-2xl font-bold text-pink-600">Post not found 💔</h1>
        <Link href="/" className="text-pink-500 underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-3xl mx-auto px-4 py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-pink-600 mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>

      <div className="prose prose-pink max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="inline-block bg-pink-500 text-white px-5 py-2 rounded-xl shadow hover:bg-pink-600 transition"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </motion.div>
  );
}
