import {useState, useEffect} from 'react';
import {useParams} from "react-router"
import {getItems, getItemsByCategory} from "../firebase/db"
import ItemList from './ItemList'


function ItemListContainer() {

  const [items, setItems] = useState ([])
  const {category} = useParams()
  
  useEffect (() => {
   category ? getItemsByCategory(category, setItems) : getItems(setItems)
  }, [category])

  return (
    <ItemList items={items} />
  );
}

export default ItemListContainer;