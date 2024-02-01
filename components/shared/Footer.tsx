import Link from "next/link";
import Container from "../ui/Container";
import Socials from "./Socials";
import { getCurrentYear } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="lg:h-screen bg-violet-900 text-site-secondary pt-24 pb-14">
      <div className="flex items-center justify-center">
        <Container className="text-lg/[2.8]">
          <h2 className="tracking-[0.28rem] text-zinc-300">FIND ME</h2>
          <ul>
            <li>
              <Link href="mailto:carmi.ziv@gmail.com">carmi.ziv@gmail.com</Link>
            </li>
          </ul>
          <Socials className="mt-4" />
          <p className="border-t border-site-secondary pt-14 mt-32">
            Made By Me :) | {getCurrentYear()}{" "}
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
