import styles from './AboutMe.module.css'

export const AboutMe=({name, profesion, experience, experience2, stack, master}) => {
    return (
    <div className={styles.containerAboutMe}>
        <div className={styles.containerCard}>


            <p className={styles.textDetails}>
                <h1>Frontend Developer Junior</h1>
            <div className={styles.ImgDev}>
            </div>
                Hello, I'm <span className={styles.name}>{name}</span><br/>
                I'm a <span className={styles.textProfesion}> {profesion}</span><br/>
                <span>{experience}</span><span>{experience2}</span><br/>
                At the moment i'm <span className={styles.textStack}>{stack}</span><br/>
                I have a <span className={styles.textMaster}>{master}</span>
            </p>
        </div>
    </div>
    )
}