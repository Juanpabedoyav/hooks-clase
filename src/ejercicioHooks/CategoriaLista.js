import React from 'react'
import Cards from './Cards'
const CategoriaLista = ({categoria}) => {
    return (
        <div>
            <h1>Lista de categorias</h1>
            {
                  categoria.map((x, i)=>{
                    return (
                        <Cards key={i} categoria={x}/>
                    )

                  })

            }
        </div>
    )
}

export default CategoriaLista
