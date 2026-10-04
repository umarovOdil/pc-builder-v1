import { useState } from 'react'
import TopBar from "../components/TopBar"
import ComponentCard from "../components/ComponentCards"
import { components } from "../constants/constants"


import ComponentSelectModal from "../components/ComponentSelectModal"
import { useParams } from 'react-router-dom'
import { decodeBuild } from '../utils/shareBuild'
import { useBuildStore } from '../store/buildStore'



function BuilderPage() {

  const { id } = useParams<{ id?: string }>()

  const { sharedUrl } = useParams<{ sharedUrl?: string }>()

  const sharedBuild = decodeBuild(sharedUrl ?? "")

  const setPart = useBuildStore((s) => s.setPart)


  if (sharedBuild) {
    for (const key in sharedBuild) {
      setPart(key, sharedBuild[key])
    }
  }

  const [selectedComponentList, setSelectedComponentList] = useState('')

  const [modalOpen, setModalOpen] = useState(false)

  function handleComponentSelect(listName: string) {
    setSelectedComponentList(listName)
    setModalOpen(true)
  }

  const pcItems = () => {

    console.log(id)

    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-7">
        {
          components.map((item) => (
            <ComponentCard
              key={item.key}
              item={item}
              onSelect={() => handleComponentSelect(item.key)}
              />
          ))
        }
      </div>
    )
  }

  return (
    <div className={`w-full h-screen `}>
      <div className={`mx-auto w-full max-w-7xl px-6 pb-60`}>
        <TopBar />
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-5xl text-neon-green my-5 font-bold ml-4">Builder</p>
          </div>
          {
            pcItems()
          }
        </div>
      </div>


      <ComponentSelectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} componentListsName={selectedComponentList} />
    </div>
  )
}

export default BuilderPage
