import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    //setCategories(categories.push("Valorant"));  NO USAR PUSH
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1>Esa gente</h1>

      <AddCategory
        //setCategori={setCategories}
        onNewCategory={addCategory}
      />
        {
            categories.map((category) => (
               <GifGrid 
                key={category} 
                category={category}/>
            ))
        }
    </>
  );
};

/*fDRSrQobpCaXcJXfCyWlL5Gi061Rrz5b*/
