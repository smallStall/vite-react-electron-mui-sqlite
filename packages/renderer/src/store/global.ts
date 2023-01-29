import {create} from 'zustand';

interface GlobalState {
  projectId: string;
  setProjectId: (by: string) => void;
}

export const useGlobalStore = create<GlobalState>()((set, get) => ({
  projectId: '',
  setProjectId: by => set({projectId: by}),
}));
