export interface rickAndMortyCharacterTypes {    
    id: string;
    name: string;
    species: string;
    status: string;
    gender: string;
    origin : {name: string};
    image: string;
};

export interface filterTypes {
  status?: string,
  species?: string,
  gender?: string,
  name?: string;
};

export interface CardProps {
  character: rickAndMortyCharacterTypes; 
};

type CharacterInfo = {
  next: number;
  pages: number;
  prev: number;
};

export type CharacterData = {
  info: CharacterInfo;
  results: rickAndMortyCharacterTypes[];
};

export type QueryData = {
  characters: CharacterData;
};
