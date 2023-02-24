import foto1 from '../../assets/layout/HeaderImg.jpg'
import styles from './styles.module.css'

export const ImgPresentation = () => {

    return(
        <div>
            <img src={foto1} alt='sofa com titulo' style={{width: "100vw"}} className={styles.headerImg}></img>
        </div>
    )
}