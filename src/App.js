import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import productolist from './Components/productoList'
import Form from './Components/Form'

function App() {

  const [producto, setproducto] = useState({
    titulo: '',
    autor: '',
    edicion: 0
  })

  const [productos, setproductos] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getproductos = () => {
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setproductos(res))
      console.log('prueba')
    }
    getproductos()
    setListUpdated(false)
  }, [listUpdated])

  return (
    <Fragment>
      <Navbar brand='Library App'/>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>producto List</h2>
            <productoList producto={producto} setproducto={setproducto} productos={productos} setListUpdated={setListUpdated}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>producto Form</h2>
            <Form producto={producto} setproducto={setproducto}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
