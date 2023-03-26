import styles from './AboutMe.module.css'

export const AboutMe=({image, name, profesion, experience, stack, master}) => {
    return (

    <div className={styles.containerAboutMe}>
        <div className={styles.containerHello}>
            <div className={styles.containerTextHello}>

                <p>Hello, I'm <span className={styles.name}>{name}</span></p>

                <div className={styles.textDetails}>
                    <p>I'm a <span className={styles.textProfesion}> {profesion}</span></p>
                    <p>I have more than <span>{experience}</span></p>

                    <p>I'm <span className={styles.textStack}>{stack}</span></p>
                    <p>I have a <span className={styles.textMaster}>{master}</span></p>
                </div>
            </div>

            <div className={styles.containerImgBackground}>
                <div className={styles.containerImgDev}>
                    {/* <img 
                    src={image}
                    alt='developer man'/> */}
                </div>
            </div>
        </div>
    </div>
    )
}