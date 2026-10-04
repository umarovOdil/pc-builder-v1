import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { BuildStore } from '../types'

// type Category = 'cpu' | 'mb' | 'gpu' | 'ram' | 'nvme' | 'sata' | 'hdd' | 'psu' | 'case' | 'cooler'
// interface Part { id: number; name: string; price?: number }

// interface BuildStore {
//   parts: {
//     cpu: string | null
//     mb: string | null
//     gpu: string | null
//     ram: string | null
//     nvme: string | null
//     sata: string | null
//     hdd: string | null
//     psu: string | null
//     case: string | null
//     cooler: string | null
//   }
//   setPart: (category: string, part: string) => void
//   removePart: (category: string) => void
//   reset: () => void
//   setFullParts: (newParts: BuildStore['parts']) => void
// }

const emptyParts: BuildStore['parts'] = {
  cpu: null, mb: null, gpu: null, ram: null, nvme: null,
  sata: null, hdd: null, psu: null, case: null, cooler: null
}

export const useBuildStore = create<BuildStore>()(
  persist(
    (set) => ({
      parts: emptyParts,
      setPart: (category, part) =>
        set((s) => ({ parts: { ...s.parts, [category]: part } })),
      removePart: (category) =>
        set((s) => ({ parts: { ...s.parts, [category]: null } })),
      reset: () => set({ parts: emptyParts }),
      setFullParts: (newParts: BuildStore['parts']) => set(() => ({ parts: structuredClone(newParts) })),
    }),
    { name: 'pc-build' }
  )
)
