import Link from "next/link";
import NavigationMenu from "../home/NavigationMenu";
import Container2 from "../ui/Container2";

const Header2 = () => {
  return (
    <header className="absolute md:fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <Container2 className="flex justify-between items-center gap-4 h-full">
        <Link
          href="/"
          className="text-site-secondary text-3xl font-extrabold duration-300 logo pointer-events-auto pl-1"
        >
          ZIV
        </Link>
        <NavigationMenu />
      </Container2>
    </header>
  );
};

export default Header2;
