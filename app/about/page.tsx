import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About</h1>

      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/submissions">Submission</Link>
      <Link href="/submissions/new">Submit work</Link>
      <Link href="/submissions/edit">Edit your submission</Link>

      <article>
        <h2>About Noroff</h2>
      </article>
    </div>
  );
}
