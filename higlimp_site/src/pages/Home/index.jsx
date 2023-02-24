import { AboutUs } from "../../components/AboutUs"
import { ButtonFloating } from "../../components/ButtonFloating"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { ImgCarousel } from "../../components/ImgCarousel"
import { ImgPresentation } from "../../components/ImgPresentation"
import { MyServices } from "../../components/MyServices"
import { HowWork } from "../../components/presentation"

import styles from './styles.module.css'


export const Home = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <ImgPresentation />
            <HowWork/>
            <MyServices />
            <ImgCarousel />
            <AboutUs />
            <ButtonFloating />
            <Footer />
        </div>
    )
}