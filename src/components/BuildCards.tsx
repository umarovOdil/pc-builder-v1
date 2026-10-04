import { useMemo } from "react";

import type { Component } from "../types/index";
import { colors } from "../constants/constants";
import { Plus } from "lucide-react";
// import { useBuildStore } from "../store/buildStore";


interface ComponentCardProps {
  item: Component;
  onSelect?: (item: Component) => void;
}


export default function ComponentCard({ item, onSelect }: ComponentCardProps) {

  // const part:string = JSON.stringify(useBuildStore((s) => s.parts[item.key]) || '');

  const color = useMemo(
    () => colors[Math.floor(Math.random() * colors.length)],
    []
  );

  const Icon = item.icon;
  const textSizeClass = item.key.length < 4 ? "text-md" : "text-sm";

  return (
    <div className="bg-amber-50/10 backdrop-blur-2xl rounded-xl px-4 py-1 relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center gap-2 my-2">
          <Icon className="text-neon-green" />
          <span className="text-xl text-neon-green text-shadow-2xl">
            {item.name}
          </span>
        </div>

        <div className="flex gap-3">
          <div
            className={`${color} w-15 min-w-15 h-15 flex items-center justify-center rounded-xl`}
          >
            <span
              className={`${textSizeClass} font-bold text-white text-center p-1 drop-shadow-xl`}
            >
              {item.key}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[16px] text-gray-300 text-shadow-2xl">
              {item.desc}
            </span>
          </div>
        </div>

        <div className="w-full my-3">
          <button
            onClick={() => {
              onSelect?.(item);
            }}
            className="bg-neon-green/20 text-white px-4 py-2 rounded-xl w-full flex gap-2 justify-center"
          >
            <Plus />
            Tanlash
          </button>
        </div>
      </div>

      <div
        className={`absolute top-0 right-0 w-1/2 h-full z-0 rounded-bl-full opacity-10 blur-xl ${color}`}
      />
    </div>
  );
}
