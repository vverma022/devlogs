import { TableCellsMerge } from "lucide-react";

interface LogoProps {
  h?: number;
  w?: number;
}

export default function Logo({ h = 24, w = 24 }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      <TableCellsMerge className="text-black dark:text-white" style={{ height: h, width: w }} />
      <span
        className="font-bold tracking-tight text-foreground"
        style={{ fontSize: h * 0.75 }}
      >
        <span className="text-red-600">Dev</span>Logs
      </span>
    </div>
  );
} 