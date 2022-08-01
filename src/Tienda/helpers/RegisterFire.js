import axios from 'axios';
export const RegisteFire = (dataToSave) =>{
    const {Correo, Contraseña, Apellido, Nombre, uid, accessToken, proveedor, fechaCreacion, Avatar } = dataToSave
    axios.post('https://reactfinal-5c36d-default-rtdb.firebaseio.com/Usuarios.json', {
        Correo,
        Contraseña,
        Apellido,
        Nombre,
        uid,
        accessToken,
        proveedor,
        fechaCreacion,
        Avatar
      })
      .then(function (response) {
       
      })
      .catch(function (error) {
       
    });
}   


export const TraerUsuario = (uid) =>{
  return axios
  .get(`https://reactfinal-5c36d-default-rtdb.firebaseio.com/Usuarios.json?orderBy="uid"equalTo="6LQR0DHkVVaRA6raLYouhH3GjKt1"`)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

