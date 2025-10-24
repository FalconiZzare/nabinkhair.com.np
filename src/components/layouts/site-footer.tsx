import { DeveloperDetails } from "@/config/developer-details";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SiteFooter = () => {
  return (
      <footer className="w-full">
        <div className="flex h-24 px-8 md:px-0 max-w-2xl mx-auto items-center justify-between">
          <div className="flex flex-col items-center justify-center w-full space-y-1">
            <p className="font-bold text-lg text-center">devn</p>
            <p className="text-sm text-muted-foreground text-center">
              Built with Next.js and Tailwind CSS by{" "}
              <Link
                href={DeveloperDetails.socialLinks[1].url}
                className="hover:underline underline-offset-2 hover:text-primary transition-colors duration-300"
                title={`Developer ${DeveloperDetails.socialLinks[1].name} account`}
              >
                @nabinkhair
                <ArrowUpRight size={15} className="inline-block" />
              </Link>
            </p>
            {/*  */}
            <p className="text-sm text-muted-foreground text-center">
              Inspired by{" "}
              <Link
                href="https://chanhdai.com/"
                className="hover:underline underline-offset-2 hover:text-primary transition-colors duration-300"
                title="Chanh Dai's Website"
                target="_blank"
                rel="noopener noreferrer"
                >
                Chanh Dai
                <ArrowUpRight size={15} className="inline-block" />
              </Link>
            </p>
          </div>
        </div>
      </footer>
  );
};

export default SiteFooter;
