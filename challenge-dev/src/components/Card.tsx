import { FC } from "react";
import { CardProps } from "../types/pageTypes";

export const Card: FC<CardProps> = ({character}) => {

    return(
        <div className="relative">
    <img src={character.image} alt={character.name} className="w-full rounded-lg object-contain" />
    <p className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 text-center text-white">
        {character.name}
    </p>
</div>
    )
};