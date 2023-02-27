import { AboutUs } from "../../components/AboutUs"
import { FooterImg } from "../../components/FooterImg"
import { ImgCarousel } from "../../components/ImgCarousel"
import { ImgHeader} from "../../components/ImgHeader"
import { MyServices } from "../../components/MyServices"
import { HowWork } from "../../components/HowWorks"

import styles from './styles.module.css'



export const Home = () => {
    return (
        <div className={styles.container}>
            <ImgHeader />
            <HowWork/>
            <MyServices />
            <ImgCarousel />
            <AboutUs />
            <FooterImg />
        </div>
    )
}