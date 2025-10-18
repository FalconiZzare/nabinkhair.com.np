import { useMDXComponents as getMDXComponents } from "@/lib/markdown/mdx-components";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return getMDXComponents(components);
}
