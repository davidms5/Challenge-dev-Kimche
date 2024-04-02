import { filterTypes } from "./pageTypes";

export interface storeTypes {
    currentPage: number;
    filters: filterTypes;
    setCurrentPage: (page: number) => void;
    setFilters: (newFilters: filterTypes) => void;
}