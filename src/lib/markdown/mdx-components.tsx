import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

import { cn } from "../utils";
import { CodeBlock } from "./code-block";

type CodeChild = {
  props: {
    children: string;
    className?: string;
    metastring?: string;
    "data-meta"?: string;
  };
};

const LANGUAGE_CLASS_REGEX = /language-([\w-]+)/;

function isCodeChild(node: unknown): node is CodeChild {
  if (typeof node !== "object" || node === null || !("props" in node)) {
    return false;
  }

  const props = (node as { props?: unknown }).props;

  return (
    typeof props === "object" &&
    props !== null &&
    typeof (props as { children?: unknown }).children === "string"
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold tracking-tight">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3 className="text-2xl font-semibold tracking-tight">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold tracking-tight">{children}</h4>,
    p: ({ children }) => <p className="leading-7 [&:not(:first-child)]:mt-3 mx-3">{children}</p>,
    a: ({ href, children }) => (
      <Link
        href={href || "#"}
        className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
      >
        {children}
      </Link>
    ),
    ul: ({ children }) => <ul className="ml-6 list-disc [&>li]:mt-2">{children}</ul>,
    ol: ({ children }) => <ol className="ml-6 list-decimal [&>li]:mt-2">{children}</ol>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 italic [&>*]:text-muted-foreground">
        {children}
      </blockquote>
    ),
    code: ({ children, className }) => {
      if (!className) {
        return (
          <code className="relative rounded bg-muted px-[3px] py-px font-mono text-sm font-semibold">
            {children}
          </code>
        );
      }

      return <code className={className}>{children}</code>;
    },
    pre: ({ children, ...props }) => {
      const child = Array.isArray(children) ? children[0] : children;

      if (isCodeChild(child)) {
        const { children: codeContent, className, metastring } = child.props;
  const langMatch = LANGUAGE_CLASS_REGEX.exec(className ?? "");
  const lang = langMatch?.[1];
        const meta = metastring ?? child.props["data-meta"] ?? undefined;

        return <CodeBlock code={codeContent} language={lang} meta={meta} />;
      }

      return <pre {...props}>{children}</pre>;
    },
    img: (props) => (
      <Image
        {...(props as ImageProps)}
        width={props.width ? Number(props.width) : 800}
        height={props.height ? Number(props.height) : 400}
        className="rounded"
        alt={props.alt || ""}
      />
    ),
    hr: () => <hr className="border" />,
    table: ({ className, children, ...rest }) => (
      <div className="my-6 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <table
          {...rest}
          className={cn(
            "w-full border-collapse text-left text-sm leading-6 [&_tbody_tr:last-child_td]:border-b-0",
            className,
          )}
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ className, ...rest }) => (
      <thead
        {...rest}
        className={cn(
          "bg-muted text-xs font-semibold uppercase tracking-wide text-muted-foreground",
          className,
        )}
      />
    ),
    tbody: ({ className, ...rest }) => (
      <tbody
        {...rest}
        className={cn("bg-background divide-y divide-border", className)}
      />
    ),
    tr: ({ className, ...rest }) => (
      <tr
        {...rest}
        className={cn("border-b border-border last:border-0 transition-colors hover:bg-muted/30", className)}
      />
    ),
    th: ({ className, ...rest }) => (
      <th
        {...rest}
        className={cn("px-4 py-2 text-left text-foreground border-b border-border", className)}
      />
    ),
    td: ({ className, ...rest }) => (
      <td
        {...rest}
        className={cn("px-4 py-2 align-top text-foreground", className)}
      />
    ),
    ...components,
  };
}
