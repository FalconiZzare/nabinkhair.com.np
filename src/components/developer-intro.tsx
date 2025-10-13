import Image from "next/image";
import { DeveloperDetails } from "@/config/developer-details";
import ShellWrapper from "./shell-wrapper";

const DeveloperIntro = () => {
  const { name, designation, bio, avatar } = DeveloperDetails;

  console.log("Avatar", avatar);

  return (
    <ShellWrapper>
      <div className="relative overflow-hidden p-2">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-3 space-y-3 md:space-y-0 ">
          <Image
            src={avatar}
            alt={name}
            width={1000}
            height={1000}
            className="h-28 w-28 md:h-32 md:w-32 md:mt-2.5 flex-shrink-0 rounded-md border object-cover shadow-md"
          />
          <div className="space-y-2">
            <div className="space-y-1">
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {name}
              </h1>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {designation}
              </p>
            </div>
            <p className="text-base leading-relaxed text-justify text-muted-foreground">{bio}</p>
          </div>
        </div>
      </div>
    </ShellWrapper>
  );
};

export default DeveloperIntro;
