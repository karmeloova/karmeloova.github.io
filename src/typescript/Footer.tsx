import styles from "../css/Footer.module.css";


export function Footer() {
    return(
        <div>
            <div className={styles.DarkLine}>
                    <p>© 2025 Olga Maruszyńska. All rights reserved.</p>
                </div>
            <div className={styles.Container}>
             
            <div className={styles.FooterContainer}>
               
                <div className={styles.IconClass}>
                    <a href="https://github.com/karmeloova">
                        <img className = {styles.Icon} src="/icons/GithubIcon.svg"></img>
                    </a>
                    <a href="https://karmeloova.itch.io">
                        <img className = {styles.Icon} src="/icons/ItchioIcon.svg"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/olga-maruszyńska-b004b8282">
                        <img className = {styles.Icon} src="/icons/LinkedinIcon.svg"></img>
                    </a>
                    
                </div>
                
            </div>  
            
            
        </div>
        </div>
        
        
    )
}