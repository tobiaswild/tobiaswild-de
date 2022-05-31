import Link from "./link";

export default function Footer() {
    return (
      <footer className="py-8 text-center text-sm text-neutral-400">
        &copy; {new Date().getFullYear()} build with 🔥 by Tobias
        <Link />
        <Link />
        <Link />
      </footer>
    )
  }