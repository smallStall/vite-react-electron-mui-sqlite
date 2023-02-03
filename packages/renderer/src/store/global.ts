import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface GlobalState {
  projectId: string;
  lotId: string;
  reset: () => void;
  setProjectId: (by: string) => void;
  setLotId: (by: string) => void;
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set, get) => ({
      projectId: '',
      lotId: '',
      reset: () => set({projectId: '', lotId: ''}),
      setProjectId: by => set({projectId: by}),
      setLotId: by => set({lotId: by}),
    }),
    {name: 'global-storage'},
  ),
);
