import { ReactNode } from "react";

const ShellWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="flex w-full max-w-xl flex-col">{children}</div>;
};

export default ShellWrapper;
