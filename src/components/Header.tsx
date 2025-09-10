import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-pink-300 p-6 mb-6 text-center">
      <Link href="/">
        <h1 className="text-3xl font-bold text-white">🌸 My Blog</h1>
      </Link>
    </header>
  );
}
