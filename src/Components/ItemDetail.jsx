import styles from "../Styles/ItemDetail.module.css"
import ItemCount from "./ItemCount"

function ItemDetail ({producto}){
    return(
        <div className={styles.fondoDiv}>
            <img className={styles.imagenProduct}src={producto?.url} alt={producto?.name} />
            <h2 className={styles.colorSubtitulos}>{producto?.name}</h2>
            <h5 className={styles.ancho}>{producto?.description}</h5>
            <div style={{paddingTop:"25px"}}>
             <ItemCount producto={producto}/>
            </div>
        </div>
    )
}

export default ItemDetail