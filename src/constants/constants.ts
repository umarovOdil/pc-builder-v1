
import { Cpu, CircuitBoard, Monitor, MemoryStick, HardDrive, Zap, PcCase, Fan } from "lucide-react";

export const components = [
  {
    key: "cpu",
    name: "Protsessor",
    icon: Cpu,
    desc: "Kompyuterning \"miyasi\" — barcha hisob-kitoblarni bajaradi, tezligi umumiy tizim unumdorligiga to'g'ridan-to'g'ri ta'sir qiladi.",
  },
  {
    key: "mb",
    name: "Motherboard",
    icon: CircuitBoard,
    desc: "Barcha qismlarni bog'lovchi asosiy plata — protsessor, RAM, videokarta va boshqa qurilmalar shu yerga ulanadi.",
  },
  {
    key: "gpu",
    name: "Videokarta",
    icon: Monitor,
    desc: "Grafik hisob-kitoblarni bajaradi — o'yinlarda FPS va video render sifatini belgilaydi.",
  },
  {
    key: "ram",
    name: "Operativ xotira",
    icon: MemoryStick,
    desc: "Ishlayotgan dastur va fayllarni vaqtincha saqlaydi — ko'p bo'lsa, bir vaqtda ko'proq dastur silliq ishlaydi.",
  },
  {
    key: "nvme",
    name: "Xotira (NVMe SSD)",
    icon: HardDrive,
    desc: "Eng tezkor flesh-xotira turi — M.2 slotga ulanadi, operatsion tizim va o'yinlar juda tez yuklanishini ta'minlaydi.",
  },
  {
    key: "sata",
    name: "Xotira (SATA SSD)",
    icon: HardDrive,
    desc: "NVMe'ga nisbatan sekinroq, lekin HDD'dan ancha tez flesh-xotira — narxi qulayroq, qo'shimcha xotira uchun yaxshi tanlov.",
  },
  {
    key: "hdd",
    name: "Xotira (HDD)",
    icon: HardDrive,
    desc: "Katta hajmli, arzon xotira — filmlar, arxivlar va kam ishlatiladigan fayllarni uzoq muddat saqlash uchun qulay, lekin eng sekin variant.",
  },
  {
    key: "psu",
    name: "Quvvat bloki",
    icon: Zap,
    desc: "Barcha qismlarga barqaror elektr energiyasini yetkazib beradi — quvvati yetarli bo'lmasa tizim beqaror ishlaydi.",
  },
  {
    key: "case",
    name: "Korpus",
    icon: PcCase,
    desc: "Barcha qismlarni jamlaydi va himoya qiladi — havo aylanishi yaxshi bo'lsa, qizib ketish kamayadi.",
  },
  {
    key: "cooler",
    name: "Sovutgich",
    icon: Fan,
    desc: "Protsessorni qizib ketishdan saqlaydi — yuqori yukda ham barqaror ishlashni ta'minlaydi.",
  },
];

export const colors = [
  "bg-red-500/30",
  "bg-orange-500/30",
  "bg-amber-500/30",
  "bg-lime-500/30",
  "bg-emerald-500/30",
  "bg-teal-500/30",
  "bg-cyan-500/30",
  "bg-sky-500/30",
  "bg-blue-500/30",
  "bg-indigo-500/30",
  "bg-violet-500/30",
  "bg-fuchsia-500/30",
  "bg-pink-500/30",
  "bg-rose-500/30",
];
