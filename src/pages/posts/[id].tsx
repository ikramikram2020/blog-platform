import { useRouter } from "next/router";
import Header from "../../components/Header";
import ReactMarkdown from "react-markdown";
import { posts } from "../../postData";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find((p) => p.id === id);

  if (!post) return <div>Article not availavle </div>;

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
        <h1 className="text-4xl font-bold text-pink-500 mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-6">{post.date}</p>

        <div className="prose prose-pink max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
