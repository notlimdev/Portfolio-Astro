import { create } from "zustand";
import Lenis from "lenis";

type LenisStore = {
  lenis: Lenis | null;
  setLenis: (lenis: Lenis) => void;
};

export const useLenisStore = create<LenisStore>((set) => ({
  lenis: null,
  setLenis: (lenis) => set({ lenis }),
}));
