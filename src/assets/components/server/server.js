import { v4 as uuidv4 } from 'uuid';
import { Notify } from 'notiflix/build/notiflix-notify-aio'

const loginUser =   async (usuario, password)=> {
    // https://backecommerce-a033oat25-waku1044.vercel.app/
    try {
        const response = await fetch("https://back-ecommerce-olive.vercel.app/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: usuario, pass: password })
        });
        const data = await response.json();
        localStorage.setItem("user", data.user);
        data.success ? window.location.href = "/home" : Notify.failure("Usuario o contraseña no registrados");
    } catch (error) {
        return console.error('Problema en la conexion', error);
    }

}
const registerUser = async (usuario, password) => {
    const response = await fetch("https://back-ecommerce-olive.vercel.app/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: usuario, pass: password })
    });
    const data = await response.json();
    console.log(data);
    window.location.href = "/";
}

// Crear funcion para borrar usuario en en back
// const deleteUser = (id) => {
//     fetch(`http://localhost:3000/api/deleteUser/${id}`,{
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json"

//         }
        
//     })
    
// }

const agregarProducto = async (producto) => {
    const {imagen, titulo,categoria, precio,descripcion} = producto
    const uuid = uuidv4()
    console.log(producto)    
    const response = await fetch("https://back-ecommerce-olive.vercel.app/api/agregarproducto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ img: imagen, nombre: titulo, precio: precio, descripcion: descripcion, categoria: categoria, idproducto: uuid, hora: new Date().toLocaleTimeString(), fecha: new Date().toLocaleDateString() })
    });
    const data = await response.json();
    console.log(data);
    
}


const mostrarProductos = async () => {
     const response = await fetch("https://back-ecommerce-olive.vercel.app/api/mostrarproductos");
    const data = await response.json();
    
    return data;    
}

const mostrarproducto = async(id) => {
    const response = await fetch(`https://back-ecommerce-olive.vercel.app/api/mostrarproducto/${id}`)
    const data = await response.json();
    return data
}

const editarproducto = async ({img,nombre,precio, descripcion, categoria, _id})=>{
    
    try {
        console.log('esto es lo que envia el front ',_id, img, nombre,precio, descripcion, categoria);
        const response = await fetch(`https://back-ecommerce-olive.vercel.app/api/actualizarproducto/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ img, nombre, precio, descripcion, categoria, hora: new Date().toLocaleTimeString(), fecha: new Date().toLocaleDateString() })
        });
        if (!response.ok) {
            throw new Error('Error al actualizar el producto'); // Lanza un error si la respuesta no es exitosa
        }
        console.log('Producto actualizado exitosamente');
        response.json(); // Convierte la respuesta a JSON si la solicitud fue exitosa
        
    } catch (err) {
        // console.error(err); // Maneja los errores de la solicitud
        alert('Ocurrió un error al actualizar el producto');
    }
}

const eliminarproducto = (id) => {
    return fetch(`https://back-ecommerce-olive.vercel.app/api/eliminarproducto/${id}`,{
        method: "DELETE",
    })
}

export const server  = {
    loginUser,
    registerUser,
    agregarProducto,
    mostrarProductos,
    eliminarproducto,
    mostrarproducto,
    editarproducto
};