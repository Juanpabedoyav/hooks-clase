import React,{useState} from 'react'
import {Button} from 'react-bootstrap'
import CategoriaLista from './CategoriaLista'

const CategoriasApp = () => {

const [categorias, setCategorias] = useState(['Horror'])

const handleAgregar = ()=>{

    setCategorias(
        [...categorias,'Risas']
    )
}

    return (
        <div>
            <h1>Categorias Hook</h1>
            <ol>
                <CategoriaLista categoria={categorias} />
            </ol>
            <Button onClick={handleAgregar} variant="primary">Enviar</Button>

        </div>
    )
}

export default CategoriasApp
