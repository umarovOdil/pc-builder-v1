import TopBar from "../components/TopBar"
import office_pc from "../assets/pc_case_images/office_pc.png"
import budget_pc from "../assets/pc_case_images/budget_pc.png"
import custom_pc from "../assets/pc_case_images/custom_pc.png"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

const buildsList = [
  {
    key: "office",
    text: "Office PC",
    description: "A budget-friendly PC for office work and light tasks.",
    img: office_pc,
  },
  {
    key: "midGaming",
    text: "Gaming PC 1080p",
    description: "An affordable option for basic computing needs.",
    img: budget_pc,
  },
  {
    key: "highEndGaming",
    text: "High-End PC 1440p+",
    description: "A high-performance machine tailored to your specific requirements.",
    img: custom_pc,
  },
]

function Recommendations() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {buildsList.map((item) => (
        <Link
          key={item.key}
          to={`/builds/${item.key}`}
          className="flex flex-col items-center justify-center p-4 bg-amber-50/10
          backdrop-blur-xs rounded-lg shadow-md hover:scale-110 transition-all"
        >
          <img
            src={item.img}
            alt={item.text}
            className="w-74 h-74 object-cover rounded-lg shadow-lg"
          />
          <p className="mt-4 text-center text-md font-semibold text-gray-200">
            {item.text}
          </p>
        </Link>
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 mx-auto w-full max-w-7xl px-6">
        <TopBar />

        <div className="flex flex-col items-center justify-center max-sm:my-10 my-20">
          <p className="text-center max-sm:text-3xl text-5xl font-semibold text-gray-200 mt-10 [text-shadow:0_0_20px_rgba(255,255,255,1)]">
            Qismlarni tanlang,{" "}
            <span className="text-neon-green [text-shadow:0_0_5px_#39ff88,0_0_24px_#39ff88,0_0_48px_#39ff88]">
              moslikni
            </span>{" "}
            biz tekshiramiz.
          </p>
          <p className="text-center text-lg font-normal text-gray-400 mt-4">
            Protsessor, ona plata va videokartani tanlang: moslik, quvvat va FPS avtomatik hisoblanadi.
          </p>
          <Link
            to="/builder"
            className="bg-neon-green text-gray-900 text-xl font-semibold py-2 px-10 rounded-full mt-6
            hover:bg-neon-green/80 transition-colors duration-300
            shadow-[0_0_30px_rgba(0,255,194,0.55)]"
          >
            Boshlash
          </Link>
        </div>

        <section>
          <p className="text-center mt-10 mb-5">Maxsus takliflar</p>
          <Recommendations />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
