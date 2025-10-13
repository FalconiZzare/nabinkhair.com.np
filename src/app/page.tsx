import PageShellWrapper from "@/components/page-shell";
import ShellWrapper from "@/components/shell-wrapper";

const Page = () => {
  return (
    <>
      <PageShellWrapper>
        <ShellWrapper>
          <p className="p-2">
            Hello, World! I am Nabin Khair, full-stack developer from Nepal with
            more than 2 years of experience in web development.
          </p>
        </ShellWrapper>
      </PageShellWrapper>
    </>
  );
};

export default Page;
