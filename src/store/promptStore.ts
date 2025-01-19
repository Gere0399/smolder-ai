import { create } from 'zustand';

interface PromptStore {
  prompt: string;
  attachedImage: string | null;
  setPrompt: (prompt: string) => void;
  setAttachedImage: (image: string | null) => void;
  clear: () => void;
}

export const usePromptStore = create<PromptStore>((set) => ({
  prompt: '',
  attachedImage: null,
  setPrompt: (prompt) => set({ prompt }),
  setAttachedImage: (image) => set({ attachedImage: image }),
  clear: () => set({ prompt: '', attachedImage: null }),
}));