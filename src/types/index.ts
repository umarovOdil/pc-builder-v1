import type { LucideIcon } from "lucide-react";

export interface Component {
  key: string;
  name: string;
  icon: LucideIcon;
  desc: string;
}

export interface BuildStore {
  parts: Record<string, string | null>
  setPart: (category: string, part: string) => void
  removePart: (category: string) => void
  reset: () => void
  setFullParts: (newParts: BuildStore['parts']) => void
}
