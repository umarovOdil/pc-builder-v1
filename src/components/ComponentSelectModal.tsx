import { Image, Plus, X } from "lucide-react";
import { componentDataMap } from "../data/pcComponents";
import { useBuildStore } from "../store/buildStore";
import { useEffect, useRef } from "react";

const ComponentSelectModal = ({ isOpen, onClose, componentListsName }: { isOpen: boolean; onClose: () => void; componentListsName: string }) => {

  const scrollRef = useRef<HTMLDivElement>(null)

  const setPart = useBuildStore((s) => s.setPart);

  const lists = componentDataMap[componentListsName] ?? [];

  function setPartItem(id: string):void {
    setPart(componentListsName, id);
    onClose();
  }


  useEffect(() => {
      if (isOpen) {
        scrollRef.current?.scrollTo({ top: 0 })
      }
    }, [isOpen, componentListsName])

	return (
    <div
      className={`transition-all ${isOpen ? 'block' : 'hidden'} w-full h-screen fixed top-0 left-0 bg-black/70 backdrop-blur-md overflow-hidden py-20 px-4`}
      onClick={onClose}
    >

      <div
        className="w-full md:w-1/2 h-11/12 mx-auto bg-neutral-900/90 border border-neutral-800 rounded-t-2xl rounded-b-sm overflow-hidden
        drop-shadow-2xl drop-shadow-amber-50/20
        "
        onClick={(e) => e.stopPropagation()}
      >

        <div className="flex items-center justify-between px-5 ">
          <p className="text-2xl font-bold my-5">
            {componentListsName.toUpperCase()}'s
          </p>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <X className="w-6 h-6 cursor-pointer" />
          </button>
        </div>

        <div className="w-full h-full overflow-y-scroll pb-20 px-3" ref={scrollRef}>
          {
            lists.map((item) => (
              <div
                key={item.id}
                className="p-4 flex items-center gap-5 bg-neutral-800/60 border border-transparent hover:border-neon-green/40 hover:bg-neutral-800 transition-colors mb-2 rounded-xl cursor-pointer"
                onClick={() => setPartItem(item.id)}
              >

                <div className="min-w-20 min-h-20 flex items-center justify-center bg-neutral-900 rounded-xl">
                  <Image className="w-10 h-10 text-neutral-500"/>
                </div>
                <div className="w-full">
                  <p className="text-gray-300 text-sm leading-relaxed lg:text-xl">
                    {item.text}
                  </p>
                </div>
                <div className="min-w-16 min-h-16 flex items-center justify-center rounded-full bg-neon-green/10 border border-neon-green/30 hover:bg-neon-green/20 transition">
                  <Plus className="w-6 h-6 text-neon-green"/>
                </div>
              </div>
            ))
          }
        </div>

      </div>

    </div>
	);
};

export default ComponentSelectModal;
