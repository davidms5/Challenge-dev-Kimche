import { FC, KeyboardEvent} from "react";
import { useStoreData } from "../store/globalStore";
import { PaginationProps } from "../types/PaginationTypes";


export const Pagination: FC<PaginationProps> = ({loading, handlePageChange, inputPage, setInputPage, characterData}) =>{
    
    const { currentPage, setCurrentPage} = useStoreData();

    const handleGoToFirstPage = () => {
        handlePageChange(1);
        setInputPage("1")
    };

    const handleGoToLastPage = () => {
        if (characterData) {
          handlePageChange(characterData.info.pages);
          setInputPage(`${characterData.info.pages}`);

        }
    };


    const handlePageInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          const pageNumber = parseInt(inputPage);
          if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= (characterData ? characterData.info.pages : 1)) {
            setCurrentPage(pageNumber);
            //setInputPage("");
          } else if(pageNumber <=1){
            setCurrentPage(1);
            setInputPage("1");
          } else if(characterData && pageNumber >= characterData?.info.pages){
            setCurrentPage(characterData.info.pages);
            setInputPage(`${characterData.info.pages}`)
          };
        };
    };
    
    return (
        <div className='flex flex-row gap-4 justify-center items-center'>
        <button onClick={() => handleGoToFirstPage()} disabled={currentPage <= 1} className="mb-2 px-2 bg-white rounded-lg font-bold">
          Primero
        </button>
        <button onClick={() => {handlePageChange(currentPage - 1); setInputPage(`${currentPage-1}`)}} disabled={currentPage <= 1} className="mb-2 px-2 bg-white rounded-lg font-bold">
          Anterior
        </button>
        <div className="flex items-center mb-2">
          
          <p className="text-white">Página: 
          <input
            type="number"
            value={inputPage}
            onChange={(e) => setInputPage(e.target.value)}
            onKeyDown={handlePageInputKeyPress}
            min={1}
            max={characterData ? characterData.info.pages : undefined}
            className="w-16 px-2 py-1 border rounded mr-2 bg-blue-950 text-white"/>
          {characterData ? <span> / {characterData.info.pages}</span> : ""}
          </p>
        </div>
        <button onClick={() => {handlePageChange(currentPage + 1); setInputPage(`${currentPage+1}`)}} disabled={characterData ? currentPage >= characterData.info.pages || loading : true} className="mb-2 px-2 bg-white rounded-lg font-bold">
          Siguiente
        </button>
        <button onClick={() => handleGoToLastPage()} disabled={characterData ? currentPage >= characterData.info.pages || loading : true} className="mb-2 px-2 rounded-lg bg-white font-bold">
          Último
        </button>
      </div>
      
    )
}