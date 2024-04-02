import { useStoreData } from './store/globalStore';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from './services/GraphQLQueries';
import { Filters } from './components/Filters';
import { CharacterData, QueryData, rickAndMortyCharacterTypes } from './types/pageTypes';
import { Card } from './components/Card';
import Modal from "./components/DetailCardModal"
import { useEffect, useState } from 'react';
import { Pagination } from './components/Pagination';
import "./App.css";


function App() {
  const { currentPage, setCurrentPage, filters } = useStoreData();

  const [characterData, setCharacterData] = useState<CharacterData | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<rickAndMortyCharacterTypes | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputPage, setInputPage] = useState<string>(currentPage.toString());

  const { loading, error, fetchMore } = useQuery<QueryData>(GET_CHARACTERS, {
    variables: { page: currentPage, ...filters },
    onCompleted: (data) => setCharacterData(data.characters),
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const handlePageChange = (newPage: number) => {
    if (!loading) {
      fetchMore({
        variables: {
          page: newPage,
          ...filters,
        },
      }).then(() => {
        setCurrentPage(newPage);
        
      });
    }
  };

  const handleOpenModal = (character: rickAndMortyCharacterTypes) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  let content;

  if (loading) {
    content =  (
      <div className='flex items-center justify-center h-screen'>
        <div className="loading-spinner"/>
      </div>
    );
  } else if (error || !characterData) {
    content = <p className='text-white'>hubo un error en la carga, intente mas tarde</p>;
  } else {
    const { results } = characterData;
    content = results.length > 0 ? (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-2 sm:px-4" >
        {results.map((character: rickAndMortyCharacterTypes) => (
          <div key={character.id} onClick={() => handleOpenModal(character)}
          className="cursor-pointer hover:bg-gray-300 p-2 rounded-lg transition duration-300 ease-in-out">
          <Card character={character} />
          </div>
      
        ))}
      </div>
    </div>
    ) : null;
  }

  return (
    <>
      <Filters />
      <Pagination loading={loading} handlePageChange={handlePageChange} characterData={characterData} inputPage={inputPage} setInputPage={setInputPage}/>

      {content}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} character={selectedCharacter} />
     <Pagination loading={loading} handlePageChange={handlePageChange} characterData={characterData} inputPage={inputPage} setInputPage={setInputPage}/>
    </>
  );
}

export default App;