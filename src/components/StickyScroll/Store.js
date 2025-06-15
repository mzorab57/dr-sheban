import { create } from "zustand";

export const useCardStore = create((set) => ({
  inViewCard: null,
  setInViewCard: (card) => set({ inViewCard: card }),
}));
