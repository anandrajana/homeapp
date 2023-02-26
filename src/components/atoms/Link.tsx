import { ReactComponent as ChevronRight } from "../../icons/chevron-small.svg";

interface Props {
  href: string;
  label: string;
}

export const Link = ({ href, label }: Props) => {
  return (
    <div className="mx-4 self-start">
      <a
        className="flex font-medium no-underline tracking-wide uppercase text-sm py-3 leading-snug text-blue hover:text-dark_grey"
        href={href}
      >
        {label}
        <span className="inline whitespace-nowrap leading-snug relative top-px">
          <ChevronRight className="w-3 h-3 ml-2 relative top-0.75" />
        </span>
      </a>
    </div>
  );
};
