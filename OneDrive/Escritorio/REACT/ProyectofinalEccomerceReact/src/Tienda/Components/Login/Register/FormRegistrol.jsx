
import { appFirebase } from '../../../helpers/credencialesFirebase'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { RegisteFire } from '../../../helpers/RegisterFire';

const auth = getAuth(appFirebase);
const provider = new GoogleAuthProvider(appFirebase);
export const FromRegistrol = () => {
    let data;
    const handlerSubmit = async (e) => {
        e.preventDefault()
        const Correo = e.target.email.value;
        const Contraseña = e.target.password.value;
        const Apellido = e.target.apellido.value;
        const Nombre = e.target.name.value;
        const Dni = e.target.dni.value;
        createUserWithEmailAndPassword(auth, Correo, Contraseña)
            .then((userCredential) => {
                const user = userCredential.user;
                data = {
                    Correo,
                    Contraseña,
                    Apellido,
                    Nombre,
                    uid: user.uid,
                    accessToken: user.accessToken,
                    proveedorr: "Correo Electronico",
                    fechaCreacion: user.metadata.creationTime
                }
                RegisteFire(data)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Ya existe el usuario <br>'+Correo,
                    text: 'Intente con otro correo!',
                  })
            });
    }



    const hola = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage)
                // ...
            });

    }


    return (
        <div className="login mt-2">
            <div className="formlogin" id="register-form">
                <form name="registration" method="post" action="/account/create" id="" onSubmit={handlerSubmit}>

                    <div className='row'>
                        <div className="col-sm-6">
                            <label className="form-label required" >Nombre</label>
                            <input type="text" required="required" placeholder="Ej: fdsfds" autoComplete="given-name" className="form-control" id="name"/>
                        </div>
                        <div className="col-sm-6">
                            <label className="form-label required">Apellido</label>
                            <input type="text" required="required" placeholder="Ej: sfdsfs" autoComplete="family-name" className="form-control" id="apellido"/>
                        </div>
                        <div className="col-sm-6">
                            <label className="form-label required">Email</label>
                            <input type="email" required="required" placeholder="Ej: fdfdfssd@mail.com" autoComplete="email" className="form-control" id="email" />
                        </div>
                        <div className="col-sm-6">
                            <label className="form-label required">Contraseña</label>
                            <input type="password" required="required" placeholder="" validate-password="" className="form-control" ng-model="password" data-toggle-password="" id="password" />
                        </div>
                        <div className="col-sm-6">
                            <label className="form-label" >DNI</label>
                            <input type="text" className="form-control" id="dni" />
                        </div>



                        <div className="row mt-4">


                            <input type="checkbox" className="formc col-sm-2" ng-model="subscribedToNewsletter" value="1" />
                            <label className="form-label col-sm-10">
                                Autorizo recibir comunicaciones promocionales y autorizo el uso de mi información para <a href="#a">fines adicionales</a>.
                            </label>



                            <input type="checkbox" required="required" className="formc col-sm-2" ng-model="acceptTerms" value="1" />
                            <label className="form-label col-sm-10">Declaro que he leído y acepto la nueva <a href="#a" target="_blank" >Política de Privacidad</a> y los <a href="#a" target="_blank">Términos y Condiciones</a> de Linio.
                            </label>

                        </div>
                    </div>

                    <button type="submit" className="btn btn-security col-12 bg-secondary text-white mt-5" ng-disabled="!registration.$valid">Completar registro</button>
                    <button onClick={hola}>GOOGLE</button>
                    <input type="hidden" id="registration" name=" " value=" " />
                </form>
            </div>
        </div>
    )
}