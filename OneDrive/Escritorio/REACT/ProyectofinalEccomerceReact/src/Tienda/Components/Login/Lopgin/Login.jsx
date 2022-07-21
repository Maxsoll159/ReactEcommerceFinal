import { Access } from "../Access;"
import { Extra } from "../Extra";
import { FooterLogin } from "../FooterLogin";
import { HeaderLogin } from "../HeaderLogin";
import { FromRegistrol } from "../Register/FormRegistrol";
export const Login = () =>{
    return(
        <>
        <HeaderLogin />
        <Access/>
        <FromRegistrol/>
        <Extra/>
        <FooterLogin/>
        </>
    )
}