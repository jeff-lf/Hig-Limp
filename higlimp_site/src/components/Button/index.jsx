import styles from './styles.module.css'


export const Button = (props) => {
    const {title} = props
    
    return (
        <button>
            <div>
                {title}
            </div>
        </button>
    )
}