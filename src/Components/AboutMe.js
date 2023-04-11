import styles from './AboutMe.module.css'

export const AboutMe=({image,altImagen, bgCardAM, altCardAM, name, profesion, experience, experience2, stack, master}) => {
    return (

    <div className={styles.imgWrapper}>

        <div className={styles.wrapperBGCard}>
            <img className={styles.imgBgCard}
                src={require(`../Images/${bgCardAM}`)}
                alt={altCardAM}
            />
            <h2 className={styles.aboutMeCard}>A b o u t - M e</h2>
        </div>

        <div className={`${styles.textDescription} ${styles.slideUp}`}>
            <h1>Frontend Developer Junior</h1>

                <img className={styles.wrapperImageDeveloper} 
                    src={require(`../Images/${image}`)} 
                    alt={altImagen}
                    />

                <p className={styles.paragraphDescription}>
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
