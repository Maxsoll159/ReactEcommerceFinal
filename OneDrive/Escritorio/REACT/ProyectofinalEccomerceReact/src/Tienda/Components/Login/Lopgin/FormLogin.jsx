import {appFirebase} from '../../../helpers/credencialesFirebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useLocalStorage from 'use-local-storage';
import { useNavigate } from "react-router-dom";
const auth = getAuth(appFirebase);
export const FormLogin = () => {
    let navigate = useNavigate();
    const [usuarioLogeado, SetUsuarioLogeado] = useLocalStorage("logeado",[])
    const handlerSubmit = async (e) => {
        e.preventDefault()
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        signInWithEmailAndPassword(auth, correo, contraseña)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
       
                localStorage.setItem("logeado",JSON.stringify([user]))

                navigate("/Logeado", { replace: true });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                alert("Error mongol")
            });
    }


    return (
        <div className='f1'>
            <div className="tab-panes active" id="login-form">
                <form name="login_form"
                    method="post"
                    action="/account/login_check"
                    className='mt-3'
                    onSubmit={handlerSubmit}
                >
                    <div className="row">
                        <div className="col-sm-6 mt-3">
                            <label className="form-label required" for="">Email</label>
                            <input type="email" required="required" className="form-control" placeholder="Ejemplo: jgonzalesc89@gmail.com" pattern="^[a-zA-Z0-9._%+\-]+@([a-zA-Z0-9-]{1,}\.)+[a-zA-Z]{2,}$" id="email" name="email" />
                        </div>
                        <div className="col-sm-6 mt-3">
                            <label className="form-label required" for="login_form_password">Contraseña</label>
                            <input type="password" required="required" className="form-control" placeholder="" ng-model="pwd" data-toggle-password="" id="password" name="password" />
                        </div>
                        <div className="col-sm-12 mt-3">
                            <a className="link-low-sm sub" href="a">
                                Olvidé mi contraseña
                            </a>
                        </div>
                    </div>

                    <button type="submit"
                        className="btn btn-security col-12 bg-warning mt-3">
                        Iniciar sesión segura
                    </button>
                </form>
            </div>
        </div>
    )
}