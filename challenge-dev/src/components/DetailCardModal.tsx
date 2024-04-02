import React from 'react';
import { ModalProps } from '../types/modalTypes';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, character }) => {
  if (!isOpen || !character) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen">
      <div className="fixed inset-0 bg-gray-500 opacity-45"></div>
      <div className="relative bg-black w-full max-w-md p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center">
        <button className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800" onClick={onClose}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <img src={character.image} alt={character.image} className="rounded-lg mb-4 md:mr-4 md:mb-0 md:w-1/2" />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2 text-white">{character.name}</h2>
          <p className='text-white'><span className="font-semibold text-sky-400">Especie:</span> {character.species}</p>
          <p className='text-white'><span className="font-semibold text-sky-400">Estado:</span> {character.status}</p>
          <p className='text-white'><span className="font-semibold text-sky-400">Genero:</span> {character.gender}</p>
          <p className='text-white'><span className="font-semibold text-sky-400">Origen:</span> {character.origin.name}</p>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Modal;
