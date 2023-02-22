import styles from './styles.module.css'


export const Button = (props) => {
    const {title} = props
    
    return (
        <button className={styles.headerButton}>
            <div>
                {title}
            </div>
        </button>
    )
}