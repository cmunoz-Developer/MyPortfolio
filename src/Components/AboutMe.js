import styles from './AboutMe.module.css'

export const AboutMe=({name, profesion, experience, experience2, stack, master}) => {
    return (
    <div className={styles.containerAboutMe}>
        <div className={styles.containerCard}>
            <h1>Frontend Developer Junior</h1>
            <p className={styles.textDetails}>
            <div className={styles.ImgDev}>
            </div>
                Hello, I'm <span className={styles.name}>{name}</span><br/>
                I'm a <span className={styles.textProfesion}> {profesion}</span><br/>
                <span>{experience}</span><span>{experience2}</span><br/>
                <p className={styles.lineStack}>At the moment i'm <span className={styles.textStack}>{stack}</span></p>
                <p className={styles.lineMaster}>I have a <span className={styles.textMaster}>{master}</span></p>
            </p>
        </div>
    </div>
    )
}