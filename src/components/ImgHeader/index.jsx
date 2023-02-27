import foto1 from '../../assets/images/sofa1.jpeg'
import styles from './styles.module.css'

export const ImgHeader = () => {

    return(
        <div>
            <img src={foto1} alt='sofa com titulo' style={{width: "100vw"}} className={styles.headerImg}></img>
        </div>
    )
}