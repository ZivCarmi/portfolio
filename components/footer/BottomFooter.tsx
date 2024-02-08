"use client";

import { getCurrentYear } from "@/lib/utils";
import { Copyright } from "lucide-react";
import dynamic from "next/dynamic";
import Container from "../ui/Container";
import BottomFooterColumn from "./BottomFooterColumn";

const ModeToggle = dynamic(() => import("../ui/mode-toggle"), {
  ssr: false,
});

const BottomFooter = () => {
  return (
    <div className="pt-14 mt-32 border-t">
      <Container className="flex items-center">
        <BottomFooterColumn>
          <span className="inline-flex items-center">
            <Copyright className="mr-1.5 w-5 h-5" />
            {getCurrentYear()}
          </span>
        </BottomFooterColumn>
        <BottomFooterColumn>
          <span>
            Made By Me <span className="text-site-secondary">:)</span>
          </span>
        </BottomFooterColumn>
        <BottomFooterColumn className="ml-auto">
          <ModeToggle />
        </BottomFooterColumn>
      </Container>
    </div>
  );
};

export default BottomFooter;
