import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>This is the home page</h1>
      <Link href="/login">Login link</Link>
    </main>
  );
}
