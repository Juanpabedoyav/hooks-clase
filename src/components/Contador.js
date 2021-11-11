import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import useContador from '../components/CustomHook'

const Contador = ()=>{
const {contador, handleSumar, handleRestar, handleReset} = useContador();



    return (
        <div>
            <h1>Funcionalidad Contador: {contador}</h1>
            <Button onClick={handleSumar} variant="primary">Sumar</Button>
             <Button onClick={handleRestar} variant="secondary">Restar</Button>
            <Button onClick={handleReset} variant="success">Reset</Button>
        </div>
    )
}

export default Contador
