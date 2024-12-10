import styles from './ServiceCard.module.css'

function ServiceCard({ ProfessionalName, FirstService, SecondService, ThirdService, FirstDay, SecondDay, ThirdDay, FirstTime, SecondTime, ThirdTime }) {
    return (
        <div>
       

        <div className={styles.mainContainer} >
            <h2>{ProfessionalName}</h2>
            <div className={styles.secondaryContainer}><h3>Horários disponíveis:</h3>
            <ul>
                <li>{FirstService}</li>
                <li>{SecondService}</li>
                <li>{ThirdService}</li>

            </ul>
            </div>

            <div className={styles.secondaryContainer}><h3>Horários disponíveis:</h3>
            
                <div style={{display: 'flex', backgroundColor: 'white', height: '6em', width: '100%'}} >
                    <div style={{backgroundColor: ' rgb(255, 136, 0)', flex: '1', textAlign: 'center'}}>
                        Dia
                           
                                <p>{FirstDay}</p>
                                <p>{SecondDay}</p>
                                <p>{ThirdDay}</p>
                          
                    </div>
                    <div style={{backgroundColor: ' rgb(255, 136, 0)', flex: '1', textAlign: 'center'}}>
                        Horários
                           
                                <p>{FirstTime}</p>
                                <p>{SecondTime}</p>
                                <p>{ThirdTime}</p>
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ServiceCard;