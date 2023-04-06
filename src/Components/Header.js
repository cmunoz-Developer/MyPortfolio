import { Navbar } from './Navbar'
import { mainMenu } from '../externalFile'

import styles from './Header.module.css'

export function Header() {
    return (
    <div className={styles.containerHeader}>
        <div className={styles.logo}>
            <p>cmunoz <span>Developer</span></p>
        </div>
        <div className={styles.containerMenu}>
            { mainMenu.map((item) =>(
                <Navbar
                    key={item.id}
                    props={item.option}
                />

                ))
            }
        </div>
    </div>
    )
}