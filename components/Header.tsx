import Link from "next/link";

const Header = () => {
  return (
    <header className="flex px-24 fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center gap-4 w-full">
        <div className="text-site-secondary text-3xl">Ziv.dev</div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
