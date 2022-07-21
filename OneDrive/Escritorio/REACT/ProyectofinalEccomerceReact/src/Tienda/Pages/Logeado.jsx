import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Loegado = () => {
    let navigate = useNavigate();
    let logeado = localStorage.getItem("logeado")
    console.log(JSON.parse(logeado))


    useEffect(() => {
        if(JSON.parse(logeado) === null) {
            navigate("/", { replace: true });
        }
    }, [])
    return (
        <h1>Hola</h1>
    )
}