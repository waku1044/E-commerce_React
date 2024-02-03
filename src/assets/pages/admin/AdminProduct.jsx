import HeaderHome from "../../components/HeaderHome";
import Banner from "../../components/Banner";
import Articulo from "../../components/Articulo";
import { server } from "../../components/server/server";
import { useState, useEffect } from "react";

const AdminProduct = () => {


  const [products, setProducts] = useState([]); 

  
  useEffect(() => {
    server.mostrarProductos().then((data)=>{
      setProducts(data)
    })
  }, [])


  return (
    <div className="container-fluid fondo">
      <HeaderHome user={localStorage.getItem("user")} buscar={true}/>
      
      <h1>Productos</h1>
      <button className="btn btn-primary my-3" onClick={() => window.location.href = "/admin"}>Atras</button>
      <section className="d-flex flex-wrap  gap-5 py-4 px-4  rounded " 
      style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}}
      >
        {products.map((product, index) => (
          <Articulo
            key={index}
            id={product._id}
            img={product.img}
            titulo={product.nombre}
            precio={product.precio}
            admin={true}
            
            
          />
        ))}
        
        
      </section>
    </div>
  );
};

export default AdminProduct;
