import React, {useState} from 'react'

const useContador = () => {
    const [contador, setContador] = useState(0);

    const handleSumar= ()=>{
        setContador( contador + 1);
    }
    const handleRestar= ()=>{
        setContador( contador + 1);
    }
    const handleReset= ()=>{
        setContador(0);
    }

    return {
        contador,
        handleSumar,
        handleRestar,
        handleReset,
     
    }
}

export default useContador
