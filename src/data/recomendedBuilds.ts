import caseCougarMx330 from "../assets/pc_case_images/case-cougar-mx330.png"
import caseMypro from "../assets/pc_case_images/case-mypro-m034.png"
import cougarDuoFacePro from "../assets/pc_case_images/Cougar DuoFace Pro RGB.png"
import cougarGeminiTPro from "../assets/pc_case_images/Cougar Gemini T Pro.png"
import cougarMx360 from "../assets/pc_case_images/Cougar MX360 RGB.webp"
import cougarMx410 from "../assets/pc_case_images/Cougar MX410 Mesh-G.png"
import cougarPanzerEvo from "../assets/pc_case_images/Cougar Panzer Evo.png"
import cougarPanzerG from "../assets/pc_case_images/Cougar Panzer-G.webp"
import cougarUniface from "../assets/pc_case_images/Cougar Uniface.png"

export const builds = [
  {
    key: "office1",
    type: "office",
    caseImg: caseMypro,
    components: [
      {
        key: "cpu",
        component: "cpu-i3-12100",
        text: "Intel Core i3-12100 LGA1700 | 3.3GHz - 4.3GHz | 60W"
      },
      {
        key: "mb",
        component: "mb-h610m-k",
        text: "ASUS PRIME H610M-K D4 | LGA1700, DDR4 | mATX | PCIe 4.0"
      },
      {
        key: "gpu",
        component: "gpu-igpu-uhd730",
        text: "Intel UHD Graphics 730 (iGPU) | 0GB Shared | 0-bit | 0W"
      },
      {
        key: "ram",
        component: "ram-ddr4-8-2666",
        text: "Kingston ValueRAM 8GB (1x8GB) | DDR4 2666MHz | CL19"
      },
      {
        key: "nvme",
        component: "nvme-kingston-nv2-250",
        text: "Kingston NV2 250GB | NVMe PCIe 4.0 | up to 3000MB/s"
      },
      {
        key: "sata",
        component: "sata-kingston-a400-240",
        text: "Kingston A400 240GB | SATA III | up to 500MB/s"
      },
      {
        key: "hdd",
        component: "hdd-seagate-bc-500",
        text: "Seagate BarraCuda 500GB | 7200RPM | 32MB Cache"
      },
      {
        key: "psu",
        component: "psu-cm-mwe-400",
        text: "Cooler Master MWE 400 | 400W | 80+ White | Non-Modular"
      },
      {
        key: "case",
        component: "case-mypro-m034",
        text: "MYPRO M034 | mATX | 2x Fans"
      },
      {
        key: "cooler",
        component: "cooler-stock-intel",
        text: "Stock Intel Cooler | Air Cooler | 65W TDP"
      }
    ]
  },
  {
    key: "office2",
    type: "office",
    caseImg: caseMypro,
    components: [
      {
        key: "cpu",
        component: "cpu-i5-10400",
        text: "Intel Core i5-10400 LGA1200 | 2.9GHz - 4.3GHz | 65W"
      },
      {
        key: "mb",
        component: "mb-h510m-h",
        text: "Gigabyte H510M H | LGA1200, DDR4 | mATX | PCIe 4.0"
      },
      {
        key: "gpu",
        component: "gpu-gt1030",
        text: "NVIDIA GeForce GT 1030 | 2GB GDDR5 | 64-bit | 30W"
      },
      {
        key: "ram",
        component: "ram-ddr4-8-3200",
        text: "Crucial 8GB (1x8GB) | DDR4 3200MHz | CL22"
      },
      {
        key: "nvme",
        component: "nvme-samsung-980-500",
        text: "Samsung 980 500GB | NVMe PCIe 3.0 | up to 3500MB/s"
      },
      {
        key: "sata",
        component: "sata-kingston-a400-480",
        text: "Kingston A400 480GB | SATA III | up to 500MB/s"
      },
      {
        key: "hdd",
        component: "hdd-wd-blue-1tb",
        text: "WD Blue 1TB | 7200RPM | 64MB Cache"
      },
      {
        key: "psu",
        component: "psu-deepcool-pf450",
        text: "Deepcool PF450 | 450W | 80+ White | Non-Modular"
      },
      {
        key: "case",
        component: "case-mypro-m034",
        text: "MYPRO M034 | mATX | 2x Fans"
      },
      {
        key: "cooler",
        component: "cooler-stock-amd-wraith",
        text: "Stock AMD Wraith Stealth | Air Cooler | 65W TDP"
      }
    ]
  },
  {
    key: "office3",
    type: "office",
    caseImg: caseMypro,
    components: [
      {
        key: "cpu",
        component: "cpu-r5-4500",
        text: "AMD Ryzen 5 4500 AM4 | 3.6GHz - 4.1GHz | 65W"
      },
      {
        key: "mb",
        component: "mb-a520m-hdv",
        text: "ASRock A520M-HDV | AM4, DDR4 | mATX | PCIe 3.0"
      },
      {
        key: "gpu",
        component: "gpu-gtx1650",
        text: "NVIDIA GeForce GTX 1650 | 4GB GDDR6 | 128-bit | 75W"
      },
      {
        key: "ram",
        component: "ram-ddr4-8-2666",
        text: "Kingston ValueRAM 8GB (1x8GB) | DDR4 2666MHz | CL19"
      },
      {
        key: "nvme",
        component: "nvme-wd-sn570-500",
        text: "WD Blue SN570 500GB | NVMe PCIe 3.0 | up to 3500MB/s"
      },
      {
        key: "sata",
        component: "sata-adata-su650-480",
        text: "ADATA SU650 480GB | SATA III | up to 520MB/s"
      },
      {
        key: "hdd",
        component: "hdd-seagate-bc-500",
        text: "Seagate BarraCuda 500GB | 7200RPM | 32MB Cache"
      },
      {
        key: "psu",
        component: "psu-cm-mwe-450",
        text: "Cooler Master MWE 450 | 450W | 80+ Bronze | Non-Modular"
      },
      {
        key: "case",
        component: "case-mypro-m034",
        text: "MYPRO M034 | mATX | 2x Fans"
      },
      {
        key: "cooler",
        component: "cooler-stock-intel",
        text: "Stock Intel Cooler | Air Cooler | 65W TDP"
      }
    ]
  },
  {
    key: "office4",
    type: "office",
    caseImg: caseMypro,
    components: [
      {
        key: "cpu",
        component: "cpu-r5-5500",
        text: "AMD Ryzen 5 5500 AM4 | 3.6GHz - 4.2GHz | 65W"
      },
      {
        key: "mb",
        component: "mb-a520m-hdv",
        text: "ASRock A520M-HDV | AM4, DDR4 | mATX | PCIe 3.0"
      },
      {
        key: "gpu",
        component: "gpu-gtx1650s",
        text: "NVIDIA GeForce GTX 1650 SUPER | 4GB GDDR6 | 128-bit | 100W"
      },
      {
        key: "ram",
        component: "ram-ddr4-8-3200",
        text: "Crucial 8GB (1x8GB) | DDR4 3200MHz | CL22"
      },
      {
        key: "nvme",
        component: "nvme-kingston-nv2-250",
        text: "Kingston NV2 250GB | NVMe PCIe 4.0 | up to 3000MB/s"
      },
      {
        key: "sata",
        component: "sata-adata-su650-240",
        text: "ADATA SU650 240GB | SATA III | up to 520MB/s"
      },
      {
        key: "hdd",
        component: "hdd-wd-blue-1tb",
        text: "WD Blue 1TB | 7200RPM | 64MB Cache"
      },
      {
        key: "psu",
        component: "psu-cm-mwe-400",
        text: "Cooler Master MWE 400 | 400W | 80+ White | Non-Modular"
      },
      {
        key: "case",
        component: "case-mypro-m034",
        text: "MYPRO M034 | mATX | 2x Fans"
      },
      {
        key: "cooler",
        component: "cooler-stock-amd-wraith",
        text: "Stock AMD Wraith Stealth | Air Cooler | 65W TDP"
      }
    ]
  },
  {
    key: "office5",
    type: "office",
    caseImg: caseMypro,
    components: [
      {
        key: "cpu",
        component: "cpu-i3-12100",
        text: "Intel Core i3-12100 LGA1700 | 3.3GHz - 4.3GHz | 60W"
      },
      {
        key: "mb",
        component: "mb-h610m-k",
        text: "ASUS PRIME H610M-K D4 | LGA1700, DDR4 | mATX | PCIe 4.0"
      },
      {
        key: "gpu",
        component: "gpu-igpu-uhd730",
        text: "Intel UHD Graphics 730 (iGPU) | 0GB Shared | 0-bit | 0W"
      },
      {
        key: "ram",
        component: "ram-ddr4-8-2666",
        text: "Kingston ValueRAM 8GB (1x8GB) | DDR4 2666MHz | CL19"
      },
      {
        key: "nvme",
        component: "nvme-samsung-980-500",
        text: "Samsung 980 500GB | NVMe PCIe 3.0 | up to 3500MB/s"
      },
      {
        key: "sata",
        component: "sata-kingston-a400-240",
        text: "Kingston A400 240GB | SATA III | up to 500MB/s"
      },
      {
        key: "hdd",
        component: "hdd-seagate-bc-500",
        text: "Seagate BarraCuda 500GB | 7200RPM | 32MB Cache"
      },
      {
        key: "psu",
        component: "psu-deepcool-pf450",
        text: "Deepcool PF450 | 450W | 80+ White | Non-Modular"
      },
      {
        key: "case",
        component: "case-mypro-m034",
        text: "MYPRO M034 | mATX | 2x Fans"
      },
      {
        key: "cooler",
        component: "cooler-stock-intel",
        text: "Stock Intel Cooler | Air Cooler | 65W TDP"
      }
    ]
  },
  {
    key: "mid1",
    type: "midGaming",
    caseImg: caseCougarMx330,
    components: [
      {
        key: "cpu",
        component: "cpu-i5-12400",
        text: "Intel Core i5-12400 LGA1700 | 2.5GHz - 4.4GHz | 65W"
      },
      {
        key: "mb",
        component: "mb-b660m-a-d4",
        text: "ASUS PRIME B660M-A D4 | LGA1700, DDR4 | mATX | PCIe 4.0"
      },
      {
        key: "gpu",
        component: "gpu-rtx3060",
        text: "NVIDIA GeForce RTX 3060 | 12GB GDDR6 | 192-bit | 170W"
      },
      {
        key: "ram",
        component: "ram-ddr4-16-3200-fury",
        text: "Kingston FURY Beast 16GB (2x8GB) | DDR4 3200MHz | CL16"
      },
      {
        key: "nvme",
        component: "nvme-samsung-980-1tb",
        text: "Samsung 980 1TB | NVMe PCIe 3.0 | up to 3500MB/s"
      },
      {
        key: "sata",
        component: "sata-crucial-mx500-500",
        text: "Crucial MX500 500GB | SATA III | up to 560MB/s"
      },
      {
        key: "hdd",
        component: "hdd-seagate-bc-1tb",
        text: "Seagate BarraCuda 1TB | 7200RPM | 64MB Cache"
      },
      {
        key: "psu",
        component: "psu-cm-mwe-550",
        text: "Cooler Master MWE 550 | 550W | 80+ Bronze | Non-Modular"
      },
      {
        key: "case",
        component: "case-cougar-mx330",
        text: "Cougar MX330 | ATX | 3x Fans"
      },
      {
        key: "cooler",
        component: "cooler-deepcool-ak400",
        text: "Deepcool AK400 | Air Cooler | 220W TDP"
      }
    ]
  },
  {
    key: "mid2",
    type: "midGaming",
    caseImg: cougarMx360,
    components: [
      {
        key: "cpu",
        component: "cpu-i5-12400f",
        text: "Intel Core i5-12400F LGA1700 | 2.5GHz - 4.4GHz | 65W"
      },
      {
        key: "mb",
        component: "mb-b760m-a",
        text: "MSI PRO B760M-A | LGA1700, DDR4 | mATX | PCIe 4.0"
      },
      {
        key: "gpu",
        component: "gpu-rx6600",
        text: "AMD Radeon RX 6600 | 8GB GDDR6 | 128-bit | 132W"
      },
      {
        key: "ram",
        component: "ram-ddr4-16-3200-vulcan",
        text: "Team T-Force Vulcan 16GB (2x8GB) | DDR4 3200MHz | CL16"
      },
      {
        key: "nvme",
        component: "nvme-kingston-nv2-1tb",
        text: "Kingston NV2 1TB | NVMe PCIe 4.0 | up to 3500MB/s"
      },
      {
        key: "sata",
        component: "sata-crucial-mx500-1tb",
        text: "Crucial MX500 1TB | SATA III | up to 560MB/s"
      },
      {
        key: "hdd",
        component: "hdd-toshiba-p300-1tb",
        text: "Toshiba P300 1TB | 7200RPM | 64MB Cache"
      },
      {
        key: "psu",
        component: "psu-antec-ne550",
        text: "Antec NE550 | 550W | 80+ Bronze | Non-Modular"
      },
      {
        key: "case",
        component: "case-cougar-mx360-rgb",
        text: "Cougar MX360 RGB | ATX | 3x Fans ARGB"
      },
      {
        key: "cooler",
        component: "cooler-deepcool-ag400",
        text: "Deepcool AG400 | Air Cooler | 180W TDP"
      }
    ]
  },
  {
    key: "mid3",
    type: "midGaming",
    caseImg: cougarMx360,
    components: [
      {
        key: "cpu",
        component: "cpu-r5-5600",
        text: "AMD Ryzen 5 5600 AM4 | 3.5GHz - 4.4GHz | 65W"
      },
      {
        key: "mb",
        component: "mb-b550-gaming-x",
        text: "Gigabyte B550 Gaming X | AM4, DDR4 | ATX | PCIe 4.0"
      },
      {
        key: "gpu",
        component: "gpu-rtx4060",
        text: "NVIDIA GeForce RTX 4060 | 8GB GDDR6 | 128-bit | 115W"
      },
      {
        key: "ram",
        component: "ram-ddr4-16-3600-fury",
        text: "Kingston FURY Beast 16GB (2x8GB) | DDR4 3600MHz | CL17"
      },
      {
        key: "nvme",
        component: "nvme-wd-sn770-1tb",
        text: "WD Black SN770 1TB | NVMe PCIe 4.0 | up to 5150MB/s"
      },
      {
        key: "sata",
        component: "sata-samsung-870evo-1tb",
        text: "Samsung 870 EVO 1TB | SATA III | up to 560MB/s"
      },
      {
        key: "hdd",
        component: "hdd-seagate-bc-2tb",
        text: "Seagate BarraCuda 2TB | 7200RPM | 256MB Cache"
      },
      {
        key: "psu",
        component: "psu-deepcool-pk550d",
        text: "Deepcool PK550D | 550W | 80+ Bronze | Semi-Modular"
      },
      {
        key: "case",
        component: "case-cougar-mx360-rgb",
        text: "Cougar MX360 RGB | ATX | 3x Fans ARGB"
      },
      {
        key: "cooler",
        component: "cooler-cm-hyper212",
        text: "Cooler Master Hyper 212 | Air Cooler | 150W TDP"
      }
    ]
  },
  {
    key: "mid4",
    type: "midGaming",
    caseImg: cougarMx410,
    components: [
      {
        key: "cpu",
        component: "cpu-r5-5600x",
        text: "AMD Ryzen 5 5600X AM4 | 3.7GHz - 4.6GHz | 65W"
      },
      {
        key: "mb",
        component: "mb-b550m-ds3h",
        text: "Gigabyte B550M DS3H | AM4, DDR4 | mATX | PCIe 4.0"
      },
      {
        key: "gpu",
        component: "gpu-rx6650xt",
        text: "AMD Radeon RX 6650 XT | 8GB GDDR6 | 128-bit | 180W"
      },
      {
        key: "ram",
        component: "ram-ddr4-16-3600-ripjaws",
        text: "G.Skill Ripjaws V 16GB (2x8GB) | DDR4 3600MHz | CL16"
      },
      {
        key: "nvme",
        component: "nvme-samsung-970evo-1tb",
        text: "Samsung 970 EVO Plus 1TB | NVMe PCIe 3.0 | up to 3500MB/s"
      },
      {
        key: "sata",
        component: "sata-samsung-870evo-500",
        text: "Samsung 870 EVO 500GB | SATA III | up to 560MB/s"
      },
      {
        key: "hdd",
        component: "hdd-wd-blue-2tb",
        text: "WD Blue 2TB | 7200RPM | 256MB Cache"
      },
      {
        key: "psu",
        component: "psu-cm-mwe-650",
        text: "Cooler Master MWE 650 | 650W | 80+ Bronze | Non-Modular"
      },
      {
        key: "case",
        component: "case-cougar-mx410-mesh-g",
        text: "Cougar MX410 Mesh-G | ATX | 4x Fans ARGB"
      },
      {
        key: "cooler",
        component: "cooler-deepcool-ak500",
        text: "Deepcool AK500 | Air Cooler | 260W TDP"
      }
    ]
  },
  {
    key: "mid5",
    type: "midGaming",
    caseImg: cougarUniface,
    components: [
      {
        key: "cpu",
        component: "cpu-i5-13400f",
        text: "Intel Core i5-13400F LGA1700 | 2.5GHz - 4.6GHz | 65W"
      },
      {
        key: "mb",
        component: "mb-b760m-a",
        text: "MSI PRO B760M-A | LGA1700, DDR4 | mATX | PCIe 4.0"
      },
      {
        key: "gpu",
        component: "gpu-rtx3060ti",
        text: "NVIDIA GeForce RTX 3060 Ti | 8GB GDDR6 | 256-bit | 200W"
      },
      {
        key: "ram",
        component: "ram-ddr4-32-3200-fury",
        text: "Kingston FURY Beast 32GB (2x16GB) | DDR4 3200MHz | CL16"
      },
      {
        key: "nvme",
        component: "nvme-kingston-kc3000-1tb",
        text: "Kingston KC3000 1TB | NVMe PCIe 4.0 | up to 7000MB/s"
      },
      {
        key: "sata",
        component: "sata-crucial-mx500-500",
        text: "Crucial MX500 500GB | SATA III | up to 560MB/s"
      },
      {
        key: "hdd",
        component: "hdd-toshiba-p300-2tb",
        text: "Toshiba P300 2TB | 7200RPM | 64MB Cache"
      },
      {
        key: "psu",
        component: "psu-antec-ne650",
        text: "Antec NE650 | 650W | 80+ Bronze | Semi-Modular"
      },
      {
        key: "case",
        component: "case-cougar-uniface",
        text: "Cougar Uniface | ATX | 3x Fans"
      },
      {
        key: "cooler",
        component: "cooler-deepcool-as500",
        text: "Deepcool AS500 | Air Cooler | 250W TDP"
      }
    ]
  },
  {
    key: "high1",
    type: "highEndGaming",
    caseImg: cougarDuoFacePro,
    components: [
      {
        key: "cpu",
        component: "cpu-i5-13600kf",
        text: "Intel Core i5-13600KF LGA1700 | 3.5GHz - 5.1GHz | 125W"
      },
      {
        key: "mb",
        component: "mb-z790-p",
        text: "MSI PRO Z790-P | LGA1700, DDR5 | ATX | PCIe 5.0"
      },
      {
        key: "gpu",
        component: "gpu-rtx4070",
        text: "NVIDIA GeForce RTX 4070 | 12GB GDDR6X | 192-bit | 200W"
      },
      {
        key: "ram",
        component: "ram-ddr5-32-5600",
        text: "Kingston FURY Beast 32GB (2x16GB) | DDR5 5600MHz | CL36"
      },
      {
        key: "nvme",
        component: "nvme-samsung-980pro-1tb",
        text: "Samsung 980 PRO 1TB | NVMe PCIe 4.0 | up to 7000MB/s"
      },
      {
        key: "sata",
        component: "sata-crucial-mx500-2tb",
        text: "Crucial MX500 2TB | SATA III | up to 560MB/s"
      },
      {
        key: "hdd",
        component: "hdd-wd-black-2tb",
        text: "WD Black 2TB | 7200RPM | 256MB Cache"
      },
      {
        key: "psu",
        component: "psu-deepcool-pk750d",
        text: "Deepcool PK750D | 750W | 80+ Gold | Semi-Modular"
      },
      {
        key: "case",
        component: "case-cougar-duoface-pro-rgb",
        text: "Cougar DuoFace Pro RGB | ATX | 4x Fans ARGB"
      },
      {
        key: "cooler",
        component: "cooler-corsair-h100i",
        text: "Corsair H100i Elite | AIO 240mm | 250W TDP"
      }
    ]
  },
  {
    key: "high2",
    type: "highEndGaming",
    caseImg: cougarPanzerG,
    components: [
      {
        key: "cpu",
        component: "cpu-r7-7700x",
        text: "AMD Ryzen 7 7700X AM5 | 4.5GHz - 5.4GHz | 105W"
      },
      {
        key: "mb",
        component: "mb-x670e-hero",
        text: "ASUS ROG Strix X670E-E | AM5, DDR5 | ATX | PCIe 5.0"
      },
      {
        key: "gpu",
        component: "gpu-rx7800xt",
        text: "AMD Radeon RX 7800 XT | 16GB GDDR6 | 256-bit | 263W"
      },
      {
        key: "ram",
        component: "ram-ddr5-32-6000-tz5",
        text: "G.Skill Trident Z5 32GB (2x16GB) | DDR5 6000MHz | CL30"
      },
      {
        key: "nvme",
        component: "nvme-wd-sn850x-1tb",
        text: "WD Black SN850X 1TB | NVMe PCIe 4.0 | up to 7300MB/s"
      },
      {
        key: "sata",
        component: "sata-samsung-870evo-2tb",
        text: "Samsung 870 EVO 2TB | SATA III | up to 560MB/s"
      },
      {
        key: "hdd",
        component: "hdd-seagate-bc-4tb",
        text: "Seagate BarraCuda 4TB | 7200RPM | 256MB Cache"
      },
      {
        key: "psu",
        component: "psu-corsair-rm750e",
        text: "Corsair RM750e | 750W | 80+ Gold | Fully Modular"
      },
      {
        key: "case",
        component: "case-cougar-panzer-g",
        text: "Cougar Panzer-G | ATX | 4x Fans ARGB"
      },
      {
        key: "cooler",
        component: "cooler-deepcool-ls720",
        text: "Deepcool LS720 | AIO 360mm | 280W TDP"
      }
    ]
  },
  {
    key: "high3",
    type: "highEndGaming",
    caseImg: cougarPanzerEvo,
    components: [
      {
        key: "cpu",
        component: "cpu-i7-13700kf",
        text: "Intel Core i7-13700KF LGA1700 | 3.4GHz - 5.4GHz | 125W"
      },
      {
        key: "mb",
        component: "mb-z790-edge",
        text: "MSI MPG Z790 Edge | LGA1700, DDR5 | ATX | PCIe 5.0"
      },
      {
        key: "gpu",
        component: "gpu-rtx4070s",
        text: "NVIDIA GeForce RTX 4070 SUPER | 12GB GDDR6X | 192-bit | 220W"
      },
      {
        key: "ram",
        component: "ram-ddr5-32-6000-vengeance",
        text: "Corsair Vengeance 32GB (2x16GB) | DDR5 6000MHz | CL30"
      },
      {
        key: "nvme",
        component: "nvme-samsung-990pro-2tb",
        text: "Samsung 990 PRO 2TB | NVMe PCIe 4.0 | up to 7450MB/s"
      },
      {
        key: "sata",
        component: "sata-crucial-mx500-2tb",
        text: "Crucial MX500 2TB | SATA III | up to 560MB/s"
      },
      {
        key: "hdd",
        component: "hdd-wd-black-4tb",
        text: "WD Black 4TB | 7200RPM | 256MB Cache"
      },
      {
        key: "psu",
        component: "psu-corsair-rm850e",
        text: "Corsair RM850e | 850W | 80+ Gold | Fully Modular"
      },
      {
        key: "case",
        component: "case-cougar-panzer-evo",
        text: "Cougar Panzer Evo | Full Tower ATX | 4x Fans ARGB"
      },
      {
        key: "cooler",
        component: "cooler-nzxt-kraken-x63",
        text: "NZXT Kraken X63 | AIO 280mm | 280W TDP"
      }
    ]
  },
  {
    key: "high4",
    type: "highEndGaming",
    caseImg: cougarPanzerEvo,
    components: [
      {
        key: "cpu",
        component: "cpu-r7-7800x3d",
        text: "AMD Ryzen 7 7800X3D AM5 | 4.2GHz - 5GHz | 120W"
      },
      {
        key: "mb",
        component: "mb-x670e-plus",
        text: "ASUS TUF Gaming X670E-Plus | AM5, DDR5 | ATX | PCIe 5.0"
      },
      {
        key: "gpu",
        component: "gpu-rtx4070ti",
        text: "NVIDIA GeForce RTX 4070 Ti | 12GB GDDR6X | 192-bit | 285W"
      },
      {
        key: "ram",
        component: "ram-ddr5-32-6200-dominator",
        text: "Corsair Dominator Platinum 32GB (2x16GB) | DDR5 6200MHz | CL32"
      },
      {
        key: "nvme",
        component: "nvme-crucial-t700-2tb",
        text: "Crucial T700 2TB | NVMe PCIe 5.0 | up to 12400MB/s"
      },
      {
        key: "sata",
        component: "sata-samsung-870evo-2tb",
        text: "Samsung 870 EVO 2TB | SATA III | up to 560MB/s"
      },
      {
        key: "hdd",
        component: "hdd-seagate-firecuda-4tb",
        text: "Seagate FireCuda 4TB | 7200RPM | 256MB Cache"
      },
      {
        key: "psu",
        component: "psu-cm-v850",
        text: "Cooler Master V850 | 850W | 80+ Gold | Fully Modular"
      },
      {
        key: "case",
        component: "case-cougar-panzer-evo",
        text: "Cougar Panzer Evo | Full Tower ATX | 4x Fans ARGB"
      },
      {
        key: "cooler",
        component: "cooler-corsair-h150i",
        text: "Corsair H150i Elite | AIO 360mm | 300W TDP"
      }
    ]
  },
  {
    key: "high5",
    type: "highEndGaming",
    caseImg: cougarGeminiTPro,
    components: [
      {
        key: "cpu",
        component: "cpu-i7-14700kf",
        text: "Intel Core i7-14700KF LGA1700 | 3.4GHz - 5.6GHz | 125W"
      },
      {
        key: "mb",
        component: "mb-z790-p",
        text: "MSI PRO Z790-P | LGA1700, DDR5 | ATX | PCIe 5.0"
      },
      {
        key: "gpu",
        component: "gpu-rx7900xt",
        text: "AMD Radeon RX 7900 XT | 20GB GDDR6 | 320-bit | 315W"
      },
      {
        key: "ram",
        component: "ram-ddr5-64-6000-tz5",
        text: "G.Skill Trident Z5 64GB (2x32GB) | DDR5 6000MHz | CL30"
      },
      {
        key: "nvme",
        component: "nvme-crucial-t705-2tb",
        text: "Crucial T705 2TB | NVMe PCIe 5.0 | up to 14500MB/s"
      },
      {
        key: "sata",
        component: "sata-crucial-mx500-2tb",
        text: "Crucial MX500 2TB | SATA III | up to 560MB/s"
      },
      {
        key: "hdd",
        component: "hdd-wd-black-2tb",
        text: "WD Black 2TB | 7200RPM | 256MB Cache"
      },
      {
        key: "psu",
        component: "psu-corsair-rm1000x",
        text: "Corsair RM1000x | 1000W | 80+ Gold | Fully Modular"
      },
      {
        key: "case",
        component: "case-cougar-gemini-t-pro",
        text: "Cougar Gemini T Pro | ATX | 3x Fans ARGB"
      },
      {
        key: "cooler",
        component: "cooler-nzxt-kraken-x73",
        text: "NZXT Kraken X73 | AIO 360mm | 300W TDP"
      }
    ]
  }
];


function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export const recomendedBuilds = shuffle(builds)
