import { useState } from "react";
import {AddCategory, GifGrid} from "./components";



export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Samurai X']);
    const onAddCategory = category => {
        if(categories.includes(category)) return
        setCategories([category, ...categories])
    }
    return (
    <>
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory onNewCategory={onAddCategory } /*setCategories={setCategories}*//>

        {categories.map(category => (<GifGrid key={category} category={category}/>))}

    </>
  )
}
