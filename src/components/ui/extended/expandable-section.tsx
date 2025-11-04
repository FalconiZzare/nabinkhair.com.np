import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import * as React from "react";

// Root component
interface ExpandableSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ExpandableSection = React.forwardRef<HTMLDivElement, ExpandableSectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-3 p-2", className)} {...props}>
        {children}
      </div>
    );
  }
);
ExpandableSection.displayName = "ExpandableSection";

// Header component
interface ExpandableSectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const ExpandableSectionHeader = React.forwardRef<HTMLElement, ExpandableSectionHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <header ref={ref} className={cn("space-y-2", className)} {...props}>
        {children}
      </header>
    );
  }
);
ExpandableSectionHeader.displayName = "ExpandableSectionHeader";

// Label component
interface ExpandableSectionLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const ExpandableSectionLabel = React.forwardRef<HTMLParagraphElement, ExpandableSectionLabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm uppercase tracking-[0.2em] text-muted-foreground", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
ExpandableSectionLabel.displayName = "ExpandableSectionLabel";

// Title component
interface ExpandableSectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const ExpandableSectionTitle = React.forwardRef<HTMLHeadingElement, ExpandableSectionTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          "text-3xl font-semibold tracking-tight text-foreground md:text-4xl",
          className
        )}
        {...props}
      >
        {children}
      </h2>
    );
  }
);
ExpandableSectionTitle.displayName = "ExpandableSectionTitle";

// Description component
interface ExpandableSectionDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const ExpandableSectionDescription = React.forwardRef<
  HTMLParagraphElement,
  ExpandableSectionDescriptionProps
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-base leading-relaxed text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
});
ExpandableSectionDescription.displayName = "ExpandableSectionDescription";

// List component
interface ExpandableSectionListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ExpandableSectionList = React.forwardRef<HTMLDivElement, ExpandableSectionListProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col space-y-3", className)} {...props}>
        {children}
      </div>
    );
  }
);
ExpandableSectionList.displayName = "ExpandableSectionList";

// Item component
interface ExpandableSectionItemProps extends React.DetailsHTMLAttributes<HTMLDetailsElement> {
  children: React.ReactNode;
}

const ExpandableSectionItem = React.forwardRef<HTMLDetailsElement, ExpandableSectionItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <details ref={ref} className={cn("group", className)} {...props}>
        {children}
      </details>
    );
  }
);
ExpandableSectionItem.displayName = "ExpandableSectionItem";

// Trigger component (summary)
interface ExpandableSectionTriggerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const ExpandableSectionTrigger = React.forwardRef<HTMLElement, ExpandableSectionTriggerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <summary
        ref={ref}
        className={cn("flex cursor-pointer items-center justify-between p-2", className)}
        {...props}
      >
        {children}
        <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground transition group-open:rotate-45">
          <PlusIcon />
        </span>
      </summary>
    );
  }
);
ExpandableSectionTrigger.displayName = "ExpandableSectionTrigger";

// Content component
interface ExpandableSectionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ExpandableSectionContent = React.forwardRef<HTMLDivElement, ExpandableSectionContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-open:grid-rows-[1fr]"
        )}
      >
        <div className="overflow-hidden">
          <div ref={ref} className={cn("space-y-3 mt-3 pl-11", className)} {...props}>
            {children}
          </div>
        </div>
      </div>
    );
  }
);
ExpandableSectionContent.displayName = "ExpandableSectionContent";

export {
  ExpandableSection,
  ExpandableSectionHeader,
  ExpandableSectionLabel,
  ExpandableSectionTitle,
  ExpandableSectionDescription,
  ExpandableSectionList,
  ExpandableSectionItem,
  ExpandableSectionTrigger,
  ExpandableSectionContent,
};
