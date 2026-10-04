import { useState } from 'react'

import TopBar from "../components/TopBar"
// import CougarCaseImg from '../assets/pc_case_images/cougar_case.png'
import { recomendedBuilds } from "../data/recomendedBuilds"
import {  useNavigate, useParams ,  } from 'react-router-dom'
import { Plus } from 'lucide-react'

import { useBuildStore } from '../store/buildStore'
import type { BuildStore } from '../types'

function BuildsPage() {

  const navigate = useNavigate()

  const { key } = useParams<{ key?: string }>()
  const filterTypes = ["all", "office", "midGaming", "highEndGaming"]

  const setFullParts = useBuildStore((s) => s.setFullParts)


  const [selectedFilter, setSelectedFilter] = useState(
    key ?? "all"
  )

  const buildList = recomendedBuilds?.filter(item => item.type === selectedFilter || selectedFilter === "all")



  function setParts(key: string) {
    const buildObj = buildList.find((build) => build.key === key)
    if (!buildObj) return

    const obj: BuildStore["parts"] = {
      cpu: null, mb: null, gpu: null, ram: null, nvme: null,
      sata: null, hdd: null, psu: null, case: null, cooler: null,
      caseImg: buildObj.caseImg,
    }

    for (const c of buildObj.components) {
      const name = c.key.toLowerCase() as keyof BuildStore["parts"]
      if (name in obj) obj[name] = c.component
    }

    setFullParts(obj)
    window.scrollTo(0, 0)
    navigate("/builder")
  }


  const buildsCards = () => {

    console.log(selectedFilter);

    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {
          buildList.map((build, index) => (
            <div
              key={build.key}
              onClick={() => setParts(build.key)}
              className="p-3 rounded-xl bg-amber-50/10 flex justify-center flex-wrap cursor-pointer">
            <div className="w-full p-3 rounded-xl bg-amber-50/5  relative backdrop-blur-[5px]">
              <img src={build.caseImg} alt="Case Img" className="mx-auto max-h-90" />
              <span className="w-12 h-12 absolute top-3 left-3 bg-neon-green/50 rounded-xl text-2xl flex items-center justify-center font-bold
                text-white">
                {index + 1}
              </span>
              <span className="absolute bottom-3 right-3 bg-neon-pink/60 rounded-xl text-sm px-2 py-1 uppercase
                text-white">
                Type : {build.type}
              </span>
            </div>
            <div className="w-full p-4 bg-amber-50/10 rounded-xl mt-4 backdrop-blur-[5px]">
              {
                build.components.map((component) => (
                  <div key={component.key} className="mt-2 w-full flex gap-1 items-start justify-between">
                    <span className="text-md text-neon-green sm:text-sm md:text-xl">{component.key}:</span>
                    <span className="text-sm text-gray-300 sm:text-sm text-end md:text-xl"> &nbsp; {component.text}</span>
                  </div>
                ))
              }
            </div>
            <div className="w-full mt-3">
              <button

                className="bg-neon-green/20 text-white px-4 py-2 rounded-xl w-full flex gap-2 justify-center"
              >
                <Plus />
                Tanlash
              </button>
            </div>
              </div>
        ))}
        <div>

        </div>
      </div>
    )
  }


  window.scrollTo({
    top: 0,
    behavior:'smooth'
  })

  return (
    <div className="w-full h-screen">
      <div className="mx-auto w-full max-w-7xl px-6 pb-60">
        <TopBar />
        <div className="flex flex-col gap-4">
          <p className="max-sm:text-3xl text-5xl text-neon-pink my-5 font-bold ml-4">Maxsus buildlar</p>

          <div className="flex justify-end gap-3 items-center">
            {/*<span className="uppercase text-md">
              Saralash
            </span>*/}
            <div className="flex gap-2">
              {
                filterTypes.map((type) => (
                  <button
                    key={type}
                    className={`bg-amber-50/30 text-white p-2 rounded-xl ${selectedFilter === type ? "bg-neon-pink" : ""}
                    transition-colors duration-300 uppercase cursor-pointer max-sm:text-xs md:text-md`}
                    onClick={() => setSelectedFilter(type)}>
                      {type}
                  </button>
                ))
              }
            </div>
          </div>

          <div>
            {buildsCards()}
          </div>


        </div>
      </div>
    </div>
  )
}

export default BuildsPage
