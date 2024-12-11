import styles from './LandingPage.module.css'
import ServiceCard from '../form/ServiceCard';
import Button from '../form/Button';

import LogoSenac from '../../assets/logoSenac.png'
import MocaSalao from '../../assets/mocasalao.png'

import Iconbarbeiro from '../../assets/barbeiro.png' 
import Icondepilacao from '../../assets/depilacao.png' 
import Iconefeito from '../../assets/efeito.png'
import Iconesmalte from '../../assets/esmalte.png'
import Iconolhos from '../../assets/olhos.png'
import Iconpes from '../../assets/pes.png'
import Icontesoura from '../../assets/tesoura.png'
import Iconpenteado from '../../assets/penteado.png'
import Iconestetica from '../../assets/estetica.png'
import Map from '../../assets/map.png'
import Loc from '../../assets/loc.png'
import Sombra from '../../assets/sombra.png'

import Card from '../form/Card'

import "bootstrap-icons/font/bootstrap-icons.css";

function LandingPage() {
    return (
        <div style={{width: '100vw', margin: '0px', padding: '0px'}} >
            
            
                <nav className={styles.mainNavbar} >

                <img src={LogoSenac} style={{width: '110px', height: '70px'}} ></img>
                <h1>Salão Senac</h1>
                <div>

                    <a href="https://www.instagram.com/senacpe" target="_blank"><button><i class="bi bi-instagram"></i></button></a>
                    <a href="https://www.youtube.com/user/SenacPernambuco" target="_blank"><button><i class="bi bi-youtube"></i></button></a>
                    <a href="https://x.com/senacpe" target="_blank"><button><i class="bi bi-twitter-x"></i></button></a>
                    <a href="https://www.facebook.com/senacpe" target="_blank"><button><i class="bi bi-facebook"></i></button></a>
                    <a href="https://www.linkedin.com/company/senacpe" target="_blank"><button><i class="bi bi-linkedin"></i></button></a>

                </div>

                </nav>
                <div className={styles.secondNavbar}>
                    <a href="#inicio">Início</a>
                    <a href="#services">Serviços</a>
                    <a href="#localizacao">Localização</a>
                    <a href="#Feedback">Feedback</a>
                    <a href="componentes/cadastro.html">Agendar serviço</a>
                </div>
            

            <section className={styles.containerQuemSomos} >
                <img src={MocaSalao} />
                <div style={{display: 'block', width: '500px', fontSize: '20px', marginLeft: '200px'}} >
                    <h2>QUEM SOMOS?</h2>
                    <p>
                    No <span style={{fontWeight: '600'}} >Recife</span>, o Senac dispõe de 
                    uma unidade <span style={{fontWeight: '600'}} >especializada</span> em 
                    serviços na área de beleza, 
                    estética e bem-estar para atender
                    ao público em geral. O <span style={{fontWeight: '600'}} >Salão 
                    Empresa Pedagógica</span> conta com 
                    uma estrutura moderna e profissionais
                    altamente qualificados, para 
                    proporcionar os cuidados que você
                    precisa. São oferecidos serviços 
                    de <span style={{fontWeight: '600'}} >manicure, pedicure, cortes 
                    masculinos e femininos, mechas
                    e cuidados com todos os tipos 
                    de cabelo, design de sobrancelha, 
                    depilação, massagem, podologia, </span>
                    entre outros.
                </p>

                    <Button
                    text={'Agendar Horário'}
                    />
                </div>
                
            </section>
            <section className={styles.containerNossosServicos} >
                <h3>Nossos Serviços</h3>
                    <div style={{display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap'}} >
                        <div className={styles.cardServicos} >
                            <img src={Iconbarbeiro} style={{width: '50px'}} />
                            <p style={{fontSize: '20px'}} >Serviços de<br/> Barba</p>
                        </div>
                        <div className={styles.cardServicos} >
                            <img src={Icondepilacao} style={{width: '50px'}} />
                            <p style={{fontSize: '20px'}} >Serviços de<br/> Depilação</p>
                        </div>
                        <div className={styles.cardServicos} >
                            <img src={Iconefeito} style={{width: '50px'}} />
                            <p style={{fontSize: '20px'}} >Serviços de<br/>depilação</p>
                        </div>
                        <div className={styles.cardServicos} >
                            <img src={Iconesmalte} style={{width: '50px'}} />
                            <p style={{fontSize: '20px'}} >Manicure e<br/> Pedicure</p>
                        </div>
                        <div className={styles.cardServicos} >
                            <img src={Iconolhos} style={{width: '50px'}} />
                            <p style={{fontSize: '20px'}} >Sobrancelhas<br/> Maquiagens</p>
                        </div>
                        <div className={styles.cardServicos} >
                            <img src={Iconpes} style={{width: '50px'}} />
                            <p style={{fontSize: '20px'}} >Serviços de<br/> Podologia</p>
                        </div>
                        <div className={styles.cardServicos} >
                            <img src={Icontesoura} style={{width: '50px'}} />
                            <p style={{fontSize: '20px'}} >Serviços<br/> capilares</p>
                        </div>
                        <div className={styles.cardServicos} >
                            <img src={Iconpenteado} style={{width: '50px'}} />
                            <p style={{fontSize: '20px'}} >Serviços de<br/> penteado</p>
                        </div>
                        <div className={styles.cardServicos} >
                            <img src={Iconestetica} style={{width: '50px'}} />
                            <p style={{fontSize: '20px'}} >Serviços de<br/> estética</p>
                        </div>
                    </div>
            </section>
            <section className={styles.containerNossaLocalizacao} >
                <div>
                    <h3>Onde ficamos localizados?</h3>
                    <p>Av. Visconde de Suassuna 500, Recife, PE, 50050-540</p>
                    <a href="https://www.bing.com/maps?osid=ac6baf46-d541-4755-b973-758f4d7f18a7&cp=-8.052388%7E-34.880605&lvl=16.0&imgid=82b41084-49c3-4c52-b484-73b9102d6ed8&v=2&sV=2&form=S00027">
                    <Button 
                    text={'Localização'}
                    />

                    </a>
                </div>
                <div>
                    <img className={styles.loc} src={Loc}/>
                    <img className={styles.map} src={Map} />
                    <img className={styles.shadow} src={Sombra}/>
                </div>
            </section>

            {/* <ServiceCard 
            // Serviços Básicos
            ProfessionalName={'Maria de Fatima'}
            FirstService={'fatimameama'}
            SecondService={'fatimameama?'}
            ThirdService={'fatimameama!!!'}
            // Horários
            FirstTime={'09:00 - 13:00'}
            SecondTime={'09:00 - 13:00'}
            ThirdTime={'09:00 - 13:00'}
            // Horários
            FirstDay={'Quarta-feira'}
            SecondDay={'Quarta-feira'}
            ThirdDay={'Quarta-feira'}
            /> */}
            
        </div>
    )
}

export default LandingPage;