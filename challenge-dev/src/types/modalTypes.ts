import { rickAndMortyCharacterTypes } from "./pageTypes";

export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    character: rickAndMortyCharacterTypes | null;
  };