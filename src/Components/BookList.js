import React from 'react';

const BookList = ({Producto, setBook, books, setListUpdated}) => {


    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        
        setListUpdated(true)
    }

    let{nombre, descripcion, codigo_categoria, precio, estado} = Producto
    const handleUpdate = id => {
        codigo_categoria = parseInt(codigo_categoria, 10)
        //validación de los datos
        if (nombre === '' || descripcion === '' || codigo_categoria === '' || precio === '' || estado <= 0 ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(Producto)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setBook({
            nombre: '',
            descripcion: '',
            codigo_categoria: '',
            precio: '',
            estado: ''
        })

        setListUpdated(true)
    }


    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Codigo_Categoria</th>
                    <th>Precio</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {books.map(Producto => (
                    <tr key={Producto.codigo}>
                        <td>{Producto.codigo}</td>
                        <td>{Producto.descripcion}</td>
                        <td>{Producto.codigo_categoria}</td>
                        <td>{Producto.precio}</td>
                        <td>{Producto.estado}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(Producto.id)} className="btn btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(Producto.id)} className="btn btn-dark">Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default BookList;