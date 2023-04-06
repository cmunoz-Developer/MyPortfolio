import styles from './AboutMe.module.css'

export const AboutMe=({image, altImagen, name, profesion, experience, experience2, stack, master}) => {
    return (
    <div className={styles.containerAboutMe}>
        <div className={styles.imgWrapper}>
            <div className={styles.wrapperCard}>
                <img className={styles.blur}
                    src={require('../Images/bg-03.png')} 
                    alt='Background card'
                    />
                <span className={styles.About}>About Me</span>
            </div>
            {/* </div> */}

            <div className={`${styles.textDescription} ${styles.slideUp}`}>
                <h1>Frontend Developer Junior</h1>
                <img className={styles.containerImageDeveloper} 
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
        <div className={styles.wrapperWelcomeSiteWeb}>
            <h2>Welcome to my portfolio!</h2>
            <p>Here you will find all the information about me, my experience, and some of the projects I have worked on. If you would like to learn more about my professional background, you can also visit my <span>LinkedIn</span> profile.</p><br/>
            <p>In this portfolio, you can see some of the projects I have completed and how I have applied my skills and knowledge to achieve successful outcomes. Additionally, if you would like to know more about my technical skills, you can visit my <a href="https://github.com/cmunoz-Developer?tab=repositories" target="_blank" rel='noreferrer'>
            </a> <span className={styles.linkedin}>GitHub</span> profile , where you will find some of my projects in more detail.</p><br/>
            <p>I am confident that my portfolio will give you a clear idea of my experience and skills in the field of <span>Frontend Development</span> and help you understand how I can contribute to your company or project.</p><br/>
            <p>Thank you for visiting my website, and please don't hesitate to contact me if you have any questions or <span>if you would like to discuss how we can work together!</span></p>

        </div>
    </div>
    )
}
