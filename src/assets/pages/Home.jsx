import HeaderHome from "../components/HeaderHome";
import Banner from "../components/Banner";
import Articulo from "../components/Articulo";
import { server } from "../components/server/server";
import { useState, useEffect } from "react";

const Home = () => {

const [products, setProducts] = useState([]);

useEffect(() => {
  server.mostrarProductos().then((data)=>{
    setProducts(data)
  })
},[])

  return (
    <div className="container-fluid fondo">
      <HeaderHome user={localStorage.getItem("user")} buscar={true}/>
      <Banner />
      <h1>Productos</h1>
      <section className="d-flex flex-wrap  gap-3 px-4 py-4 rounded  " 
      style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}}
      >
        {products.map((product, index) => (
          <Articulo
            key={index}
            id={product._id}
            img={product.img}
            titulo={product.nombre}
            precio={product.precio}
            admin={false}
            
            
          />
        ))}
        
      </section>
    </div>
  );
};

export default Home;
