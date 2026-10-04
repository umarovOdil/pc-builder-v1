import { useRef, useState } from "react";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

import TopBar from "../components/TopBar";
import { componentDataMap } from "../data/pcComponents";
import { useBuildStore } from "../store/buildStore";
import CougarCaseImg from "../assets/pc_case_images/cougar_case.png";
import { ArrowLeft, FileDown, Share2 } from "lucide-react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { encodeBuild } from "../utils/shareBuild";

function MyBuildPage() {
  const parts = useBuildStore((state) => state.parts);

  const partsList = Object.keys(parts).map((item) => ({
    part: item,
    text: componentDataMap[item]?.find((p) => p.id === parts[item])?.text,
  }));

  const printRef = useRef(null);
  const [exporting, setExporting] = useState(false);

  async function handleDownloadPdf() {
    if (!printRef.current) return;
    setExporting(true);

    let box: { x: number; y: number; w: number; h: number } | null = null;

    try {
      const scale = 2;
      const canvas = await html2canvas(printRef.current, {
        scale,
        backgroundColor: "#0a0a0f",
        useCORS: true,
        onclone: (doc, root) => {
          const el = doc.getElementById("share-link-text");
          if (!el) return;

          const r = el.getBoundingClientRect();
          const rr = (root as HTMLElement).getBoundingClientRect();
          box = {
            x: r.left - rr.left,
            y: r.top - rr.top,
            w: r.width,
            h: r.height,
          };
        },
      });

      const w = canvas.width / scale;
      const h = canvas.height / scale;
      const pad = 20;

      const pdf = new jsPDF({
        orientation: w > h ? "landscape" : "portrait",
        unit: "px",
        format: [w + pad * 2, h + pad * 2],
      });

      pdf.setFillColor(10, 10, 15);
      pdf.rect(0, 0, w + pad * 2, h + pad * 2, "F");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", pad, pad, w, h);

      if (box) {
        const b = box as { x: number; y: number; w: number; h: number };
        pdf.link(pad + b.x, pad + b.y, b.w, b.h, { url: shareUrl });
      }

      pdf.save("my-build.pdf");
    } finally {
      setExporting(false);
    }
  }

  const shareUrl = `${window.location.origin}/builder/${encodeBuild(parts)}`;

  async function nativeShare(url: string) {
    if (!navigator.share) return false;
    try {
      await navigator.share({
        title: "My PC build",
        text: "Mening PC buildim",
        url,
      });
      return true;
    } catch {
      return true; // foydalanuvchi bekor qildi, fallback kerak emas
    }
  }

  return (
    <div className="w-full min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-6 pb-10">
        <TopBar />

        <div className="flex items-end justify-between my-5 ml-4">
          <p className="text-5xl text-neon-green font-bold">My Build</p>
          {/*<p className="text-lg text-gray-400">
            {selectedCount} / {partsList.length} tanlangan
          </p>*/}
        </div>

        <div className="mt-10 mb-4 grid grid-cols-4 max-md:grid-cols-1 gap-5 items-center justify-between">
          <Link
            to="/builder"
            className="flex gap-2 items-center font-semibold text-neon-green cursor-pointer"
          >
            <ArrowLeft size={20} />
            O'zgartirish
          </Link>

          <div className="flex flex-wrap gap-2 justify-end w-full col-span-3 max-md:col-span-1">
            <button
              onClick={() => nativeShare(shareUrl)}
              type="button"
              className=" inline-flex items-center gap-2 rounded-xl border border-neon-green/40 bg-neon-green/10 px-5 py-3 text-base font-semibold text-neon-green transition-all duration-200 hover:bg-neon-green/20 hover:shadow-[0_0_20px_rgba(57,255,20,0.25)] active:scale-95 cursor-pointer"
            >
              <Share2 size={20} />
              Ulashish
            </button>

            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={exporting}
              className=" inline-flex items-center gap-2 rounded-xl border border-[#F40F02]/50 bg-[#F40F02]/10 px-5 py-3 text-base font-semibold text-[#F40F02] transition-all duration-200 hover:bg-[#F40F02]/20 hover:shadow-[0_0_20px_rgba(244,15,2,0.3)] active:scale-95 cursor-pointer"
            >
              <FileDown size={20} />
              {exporting ? "Tayyorlanmoqda..." : "Chop etish (PDF)"}
            </button>
          </div>
        </div>

        <div
          ref={printRef}
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="w-full flex items-center justify-center rounded-2xl border border-neon-green/30 bg-white/5 p-4">
            <img
              src={CougarCaseImg}
              alt="CaseImg"
              className="w-60 max-w-60 max-h-100 mx-auto"
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-neon-green/30 bg-white/5 shadow-[0_0_30px_rgba(57,255,20,0.08)] sm:col-span-1 md:col-span-2">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neon-green/10 text-left text-neon-green uppercase tracking-widest text-sm">
                  <th className="px-6 py-4 font-semibold">Komponent</th>
                  <th className="px-6 py-4 font-semibold">Tanlangan model</th>
                </tr>
              </thead>

              <tbody>
                {partsList.map(({ part, text }) => (
                  <tr
                    key={part}
                    className="border-t border-white/10 transition-colors hover:bg-neon-green/5"
                  >
                    <td className="px-6 py-4 text-xl font-semibold text-white">
                      {part.toUpperCase()}
                    </td>
                    <td className="px-6 py-4 text-lg">
                      {text ? (
                        <a
                          href={`https://www.google.com/search?q=${encodeURIComponent(`site:olx.uz ${text}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-gray-100 hover:text-neon-green"
                        >
                          {text}
                        </a>
                      ) : (
                        <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-sm text-gray-500">
                          Tanlanmagan
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/*<Footer />*/}
          </div>

          <div className="sm:col-span-1 md:col-span-3 mt-10 min-w-0 flex items-center gap-2">
            <span className="shrink-0 text-xl font-semibold">
              Build havolasi:
            </span>
            <a href={shareUrl} className="flex min-w-0">
              <span
                id="share-link-text"
                className="truncate text-sm text-neon-green underline hover:text-neon-pink"
              >
                {shareUrl}
              </span>
            </a>
          </div>

          <div className="sm:col-span-1 md:col-span-3 mt-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBuildPage;
