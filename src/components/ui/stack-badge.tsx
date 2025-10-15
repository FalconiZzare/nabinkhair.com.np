import Image from "next/image"

interface StackBadgeProps {
  name: string
  icon: string
  hasDarkIcon?: boolean
}

const StackBadge = ({ name, icon, hasDarkIcon }: StackBadgeProps) => {
  return (
    <div className="inline-flex items-center justify-center whitespace-nowrap rounded font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 hover:bg-cardColorForeground py-2 border border-border h-[22px] gap-1.5 bg-muted/40 px-1.5 pr-2 text-xs hover:text-brand">
      <Image
        src={icon}
        alt={name}
        width={20}
        height={20}
        className={`h-4 w-4 rounded ${hasDarkIcon ? "dark:hidden" : ""}`}
      />
      {hasDarkIcon ? (
        <Image
          src={icon.replace(".svg", "-dark.svg")}
          alt={name}
          width={16}
          height={16}
          className="hidden h-4 w-4 rounded dark:block"
        />
      ) : null}
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

export default StackBadge
