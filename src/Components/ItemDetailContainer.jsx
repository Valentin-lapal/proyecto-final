import { useState, useEffect } from "react"
import {useParams} from "react-router"
import {getItem} from "../firebase/db"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer(){

    const [producto, setProducto] = useState()
    const {id} = useParams()

    useEffect(() =>{

        getItem(id, setProducto)
    }, [id])

    return(
        <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer