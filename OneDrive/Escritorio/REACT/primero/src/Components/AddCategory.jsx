import { useState } from "react";
export const AddCategory = ({onNewCategory}) => {

    const [inpuValue, setInpuValue] = useState("One Punch")

    const onInputChange = ({target}) => {
        //RECIBIMOS SIEMRE EL EVENTO
        setInpuValue(target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(inpuValue.trim().length <= 1){
            return;
        }
        //setCategori(categories => [inpuValue, ...categories])
        onNewCategory(inpuValue.trim())
        setInpuValue("")
    }
    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar Gif"
          value={inpuValue}
          onChange={onInputChange}
        />
      </form>
    );
}