import styles from './ScrollY.module.css'

export const ScrollY = ({title, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, socialNet1, socialNet2, linkSocialNet1, linkSocialNet2}) => {

    return (
    <>
        <div className={styles.wrapperScroll}>
            <div>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <p>{paragraph1} <a href={linkSocialNet1} target="_blank" rel="noreferrer"> <span className={styles.linkedin}>{socialNet1}</span></a> {paragraph2} </p><br/>
            <p>{paragraph3} <a href={linkSocialNet2} target="_blank" rel="noreferrer"> <span className={styles.gitHub}>{socialNet2}</span></a> {paragraph4}</p><br/>
            <p>{paragraph5} </p><br/>
            <p>{paragraph6}</p>
        </div>        
    </>
    )
}