import styles from './AboutMe.module.css'

export const AboutMe=({name, profesion, experience, stack, master}) => {
    return (
    <div className={styles.containerAboutMe}>
        <div className={styles.containerCard}>

            <div className={styles.ImgDev}>

            </div>

            <h1>Frontend Developer Junior</h1>
            <p className={styles.textDetails}>
                Hello, I'm <span className={styles.name}>{name}</span><br/>
                I'm a <span className={styles.textProfesion}> {profesion}</span> I have more than <span>{experience}</span> I'm <span className={styles.textStack}>{stack}</span> I have a <span className={styles.textMaster}>{master}</span>
            </p>
        </div>
    </div>
    )
}