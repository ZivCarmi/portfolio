import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-4 px-8 sm:px-24 absolute md:fixed top-0 left-0 right-0 z-10">
      <Link href="/" className="text-site-secondary text-3xl">
        Ziv.dev
      </Link>
    </header>
  );
};

export default Header;
