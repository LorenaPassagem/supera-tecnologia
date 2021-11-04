import React, { useState } from "react";
import AddProductStyles, { ItemStyles } from "./style";


export const AddProduct = () => {

    const [item, setItem] = useState(0)
    function Click() { setItem(item+1)}

    return (
        <>           
           <AddProductStyles onClick={Click}>
            Add no carrinho {item}
           </AddProductStyles>
           
         </>  
    )
}

export const Qualtidade = () => {   

    return <ItemStyles>{}</ItemStyles>
}

//() => setItem(item + 1)
//const [item, setItem] = useState(0)


