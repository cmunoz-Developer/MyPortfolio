import styles from './Navbar.module.css'

export const Navbar = ({props}) => {
    return(
    <div className={styles.containerNavbar}>
        <div className={styles.containerOptions}>
            <ul>
                <li>{props}</li>
            </ul>
        </div>
    </div>
    )
}