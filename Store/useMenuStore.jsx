import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useMenuStore = create(
  persist(
    (set) => ({
      isOpen: false,
      toggleMenu: () => set((state) => ({ isOpen: !state.menu })),
      closeMobileMenu: () => set({ isOpen: false }),
    }),
    {
      name: "menu-store",
    }
  )
);
