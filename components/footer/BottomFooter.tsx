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
      <Container className="flex items-center justify-between sm:justify-normal">
        <div className="flex flex-1 flex-col-reverse sm:flex-row gap-1 sm:gap-0">
          <BottomFooterColumn className="flex-1">
            <span className="inline-flex items-center">
              <Copyright className="mr-1.5 w-4 h-4" />
              {getCurrentYear()}
            </span>
          </BottomFooterColumn>
          <BottomFooterColumn className="flex-1">
            <span>
              Made By Me <span className="text-site-secondary">:)</span>
            </span>
          </BottomFooterColumn>
        </div>
        <div className="flex-1">
          <BottomFooterColumn className="sm:ml-auto">
            <ModeToggle />
          </BottomFooterColumn>
        </div>
      </Container>
    </div>
  );
};

export default BottomFooter;
