import { useMemo } from "react";

import type { Component } from "../types/index";
import { colors } from "../constants/constants";
import { ArrowLeftRight, ImageOff, Plus, Trash } from "lucide-react";
import { useBuildStore } from "../store/buildStore";
import { componentDataMap } from "../data/pcComponents";


interface ComponentCardProps {
  item: Component;
  onSelect?: (listName: string) => void;
}


export default function ComponentCard({ item, onSelect }: ComponentCardProps) {

  const partId: string | null = useBuildStore((s) => s.parts[item.key]);
  const removePart = useBuildStore((s) => s.removePart);

  const part = useMemo(
    () => componentDataMap[item.key].find((c) => c.id === partId) ?? null,
    [item.key, partId]
  );

  const color = useMemo(
    () => colors[Math.floor(Math.random() * colors.length)],
    []
  );
  const Icon = item.icon;
  const textSizeClass = item.key.length < 4 ? "text-md" : "text-sm";

  function deletePart(partKey: string) {
    removePart(partKey);
  }

  return (

    <div className="bg-amber-50/10 backdrop-blur-2xl rounded-xl p-4 py-1 relative overflow-hidden min-h-30">
      <div className="relative z-10 flex flex-col flex-1 content-between h-full">
        <div className="flex items-center gap-2 my-2">
          <Icon className="text-neon-green" />
          <span className="text-xl text-neon-green text-shadow-2xl">
            {item.name }
          </span>
        </div>
        <div className="flex gap-4">
          <div
            className={`${color} w-18 min-w-18 h-18 flex items-center justify-center rounded-xl`}
          >
            <span
              className={`${textSizeClass} font-bold text-white text-center p-1 drop-shadow-xl`}
            >
              {
                part ? <span className="flex gap-1 items-center"><ImageOff /></span> : item.key.toUpperCase()
              }
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className={`${!part ? 'text-xl' : 'w-full text-xl text-end'} text-gray-300 text-shadow-2xl`}>
              {part?.text || item.desc}
            </span>
          </div>
        </div>

        <div className="w-full mt-auto py-3 flex gap-2">
          <button
            onClick={() => {
              console.log(item.key.toLowerCase());
              onSelect?.(item.key.toLowerCase())
            }}
            className="bg-neon-green/20 text-white px-4 py-2 rounded-xl w-full flex gap-2 justify-center cursor-pointer"
          >
            {
              !part ? <span className="flex gap-1 items-center">
                <Plus />
                Tanlash
              </span> :
              <span className="flex gap-1 items-center">
                <ArrowLeftRight />
                Almashtirish
              </span>
            }
          </button>
          <button
            onClick={() => {
              deletePart(item.key);
            }}
            className={`bg-red-600 text-white px-2 rounded-xl gap-2 cursor-pointer ${!part ? 'hidden' : ''}`}
          >
            <Trash />
          </button>
        </div>
      </div>

      <div
        className={`absolute top-0 right-0 w-4/5 h-full z-0 rounded-bl-full opacity-20 blur-2xl ${color}`}
      />
    </div>
  );
}
