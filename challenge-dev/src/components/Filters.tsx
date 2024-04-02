import { ChangeEvent, useState } from "react";
import { useStoreData } from "../store/globalStore";
import { FaSearch } from "react-icons/fa";

export function Filters () {

    const { filters, setFilters} = useStoreData();
    const [name, setName] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleNameUpdate = () => {
        setFilters({ ...filters, name });
    };

    const resetFilters = () => {
        setFilters({});
        setName("");
    }


    return (
        <div className="container mx-auto px-4 py-6 bg-black rounded-lg shadow-md">
            <div className="flex flex-row gap-4">
                <div className="relative w-full">
                    <input
                        name="name"
                        value={name || ''}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nombre"
                        className="input input-bordered w-full px-4 py-2 bg-black text-white rounded-md focus:outline-none"
                        style={{ border: '2px solid #9aa4b8' }} 
                    />
                    <button onClick={handleNameUpdate} className="absolute inset-y-0 right-0 bg-white px-3 py-2 rounded-md" style={{ border: '2px solid white' }}><FaSearch /></button>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center mt-4 justify-between flex-grow">
                
                <select name="species" value={filters.species || ''} onChange={handleChange} className="select select-bordered w-full max-w-xs px-4 py-2 rounded-md bg-[#031b42d3] text-white font-bold focus:outline-none sm:w-full lg:max-w-sm">
                    <option value="">Especie...</option>
                    <option value="Human">Humano</option>
                    <option value="Alien">Alien</option>
                    <option value="Robot">Robot</option>
                </select>
                <select name="gender" value={filters.gender || ''} onChange={handleChange} className="select select-bordered w-full max-w-xs px-4 py-2 rounded-md focus:outline-none bg-[#031b42d3] text-white font-bold sm:w-full lg:max-w-sm">
                    <option value="">Genero...</option>
                    <option value="Male">Hombre</option>
                    <option value="Female">Mujer</option>
                </select>
                <select name="status" value={filters.status || ""} onChange={handleChange} className="select select-bordered w-full max-w-xs px-4 py-2 rounded-md focus:outline-none bg-[#031b42d3] text-white font-bold sm:w-full lg:max-w-sm">
                    <option value="">Estatus...</option>
                    <option value="alive">Vivo</option>
                    <option value="dead">Muerto</option>
                    <option value="unknown">Desconocido</option>
                </select>
                <button onClick={resetFilters} className="btn btn-secondary w-full sm:w-auto  px-6 py-2 rounded-md bg-white font-bold">Reset</button>
            </div>
        </div>
    );
    
}