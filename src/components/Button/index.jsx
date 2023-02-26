import styles from './styles.module.css'


export const Button = (props) => {
    const {title, onClick} = props
    
    return (
        <button className={styles.headerButton} onClick={onClick}>
            <div>
                {title}
            </div>
        </button>
    )
}