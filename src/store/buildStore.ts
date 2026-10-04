import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { BuildStore } from '../types'

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
