import { Link } from "react-router-dom";
import { server } from "../../assets/components/server/server";
import  BtnCarrito  from "../../assets/components/BtnCarrito";
import  useStore  from "../../store/Store";

const Articulo = (props) => {
  const cont = useStore((state) => state.count);
  const countCarrito = useStore((state) => state.countCarrito);
  // const [count, setCount] = useState(cont);
  const { img, titulo, precio, id, admin } = props;
  
  function agregarCarrito(e) {
    let id = e.target.id;
    // e.target.parentNode.parentNode.parentNode.remove();
    // server.agregarcarrito(id);
    countCarrito(1);
  }
  function eliminar(e) {
    let id = e.target.id;
    e.target.parentNode.parentNode.parentNode.remove();
    server.eliminarproducto(id);
  }
  
  return (
    <article className="text-center" id="star" style={{ maxWidth: "15rem" }}>
      <div className="card " style={{ width: "15rem", height: "23rem" }}>
        <img
          src={img}
          alt="producto"
          style={{ height: "10rem" }}
          className="producto card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title buscar">{titulo}</h5>
          <p className="card-text">
            $<strong>{precio}</strong>
          </p>
          <div className="d-flex flex-column gap-2">
            <Link
              to={`/producto/${id}`}
              className="verProducto btn btn-primary"
            >
              Ver producto
            </Link>
            {!admin && (
              <BtnCarrito msj="Añadir al carrito" onClick={agregarCarrito} />
            )}
            {props.admin && (
              <Link to={`/adminEdit/${id}`} className="btn btn-success">
                Editar
              </Link>
            )}
            {props.admin && (
              <button className="btn btn-danger" id={id} onClick={eliminar}>
                Eliminar
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Articulo;
