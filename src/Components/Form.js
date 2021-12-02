import React from 'react';

const Form = ({productos, setproductos}) => {

    const handleChange = e => {
        setproductos({
            ...productos,
            [e.target.name]: e.target.value
        })
    }

    let{nombre, descripcion, codigo_categoria, precio, estado} = productos

    const handleSubmit = () => {
        codigo_categoria = parseInt(codigo_categoria, 10)
        //validación de los datos
        if (nombre === '' || descripcion === '' || codigo_categoria === '' || precio === '' || estado <= 0 ) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(productos)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setproductos({
            nombre: '',
            descripcion: '',
            codigo_categoria: '',
            precio: '',
            estado: ''
            
        })



    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input value={nombre} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input value={descripcion} name="descripcion" onChange={handleChange} type="text" id="descripcion" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="edition" className="form-label">Edition</label>
                <input value={codigo_categoria}  name="codigo_categoria" onChange={handleChange} type="number" id="codigo_categoria" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input value={precio} name="nombre" onChange={handleChange} type="text" id="precio" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input value={estado} name="descripcion" onChange={handleChange} type="text" id="estado" className="form-control"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default Form;