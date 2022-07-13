import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inpuntValue, setInpuntValue] = useState('')

    const onInputChange = ({target})=>{
        setInpuntValue(target.value)
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        if (inpuntValue.trim().length <= 1) return
        // setCategories(c => [inpuntValue, ...c])
        onNewCategory(inpuntValue)
        setInpuntValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            name="" 
            id="" 
            placeholder="Buscar Gif's" 
            value={inpuntValue} 
            onChange={onInputChange}
            // onChange={e => onInputChange(e)}
            />
        </form>
  )
}
