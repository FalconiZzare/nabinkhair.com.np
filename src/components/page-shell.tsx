import { ReactNode } from "react";

const PageShellWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative p-2 md:p-0 grid min-h-screen w-full grid-cols-[minmax(0,1fr)_2rem_minmax(0,auto)_2rem_minmax(0,1fr)] grid-rows-[1fr_1px_auto_1px_1fr] [--pattern-fg:var(--muted)]">
      <div className="col-start-3 row-start-3 flex max-w-xl flex-col items-center w-full">
        {children}
      </div>
      <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="pointer-events-none relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)"></div>
      <div className="pointer-events-none relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
    </div>
  );
};

export default PageShellWrapper;
