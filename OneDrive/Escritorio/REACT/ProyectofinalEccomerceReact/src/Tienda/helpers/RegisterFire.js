import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios';

export const RegisteFire = (dataToSave) =>{
    const {Correo, Contraseña, Apellido, Nombre, uid, accessToken, proveedor, fechaCreacion } = dataToSave
    axios.post('https://reactfinal-5c36d-default-rtdb.firebaseio.com/Usuarios.json', {
        Correo,
        Contraseña,
        Apellido,
        Nombre,
        uid,
        accessToken,
        proveedor,
        fechaCreacion
      })
      .then(function (response) {
        Swal.fire(
            'Felicidades!',
            'Se ha registrado con exito!',
            'success'
        )
      })
      .catch(function (error) {
        Swal.fire({
            icon: 'error',
            title: 'Revisar que los datos sean correctos...',
            text: 'Intente otra vez!',
          })
    });
}   

