import { create } from 'zustand';
import { Project } from '@/data/projects';

export type ViewState = 'home' | 'projects' | 'about' | 'contact';

interface AppState {
  currentView: ViewState;
  selectedProject: Project | null;
  isCanvasLoaded: boolean;
  setCurrentView: (view: ViewState) => void;
  setSelectedProject: (project: Project | null) => void;
  setCanvasLoaded: (loaded: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentView: 'home',
  selectedProject: null,
  isCanvasLoaded: false,
  setCurrentView: (view) => set({ currentView: view }),
  setSelectedProject: (project) => set({ selectedProject: project }),
  setCanvasLoaded: (loaded) => set({ isCanvasLoaded: loaded }),
}));
