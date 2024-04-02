import { CharacterData } from "../types/pageTypes";

export interface PaginationProps {
    loading: boolean;
    characterData: CharacterData | null;
    inputPage: string;
    setInputPage: (type: string) => void;
    handlePageChange: (type: number) => void ;
}