import { create } from "zustand";
import { storeTypes } from "../types/globalStoreTypes";

export const useStoreData = create<storeTypes>((set) =>({
    currentPage: 1,
    filters: {
    status: "",
    species: "",
    gender: "",
    name: ""
    },
    setCurrentPage: (page: number) => set({currentPage: page}),
    setFilters: (newFilters) => set(() => ({ filters: newFilters })),
}));