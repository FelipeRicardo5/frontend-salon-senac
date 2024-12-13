import styles from './CardFeedback.module.css'
import Profile from '../../assets/profiles/profile.png'

function CardFeedback({ user, description, profile }) {
    return(
        <div className={styles.CardFeedback} >
            <img src={Profile} alt={user}/>
            <h3>{user}</h3>
            <p>{description}</p>
        </div>
    )
}

export default CardFeedback;