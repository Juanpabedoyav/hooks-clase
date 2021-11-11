import React,{useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
const Formulario = () => {

const [data, setData] = useState({
nombre: '',
email: ''
})
const handleOnChange= ({target})=> {
  setData({
    ...data,
    [target.name]:target.value
  })

}

useEffect(() => {
console.log('ComponentDidMount');
return()=>{
  console.log('ComponentMount');

}
}, [data])





    return (
        <Form>
        <Form.Group className="mb-3" controlId="formulario">
          <Form.Label>Correo</Form.Label>
          <Form.Control  
          name="email" 
          type="email" 
          placeholder="Ingresa el Correo" 
          onChange={handleOnChange} 
          value={data.email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formulario">
          <Form.Label>Nombre</Form.Label>
          <Form.Control  
          name="nombre" 
          type="Name" 
          placeholder="Ingresa el Nombre" 
          onChange={handleOnChange} 
          value={data.nombre} 
          />
        </Form.Group>
        <Button  variant="primary">Enviar</Button>

        </Form>


    )
}

export default Formulario
