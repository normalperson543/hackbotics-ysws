import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";

export default function Collapsible({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex flex-row gap-2 items-center w-full text-xl font-bold cursor-pointer border-b border-b-indigo-800 pb-2"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
        {title}
      </div>
      {expanded && <div className="text-lg">{children}</div>}
    </div>
  );
}
