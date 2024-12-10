import styles from './LandingPage.module.css'
import ServiceCard from '../form/ServiceCard';

import LogoSenac from '../../assets/logoSenac.png'
import MocaSalao from '../../assets/mocasalao.png'

import "bootstrap-icons/font/bootstrap-icons.css";

function LandingPage() {
    return (
        <div>
            
            <nav>
                <div className={styles.mainNavbar} >

                <img src={LogoSenac} style={{width: '110px', height: '70px'}} ></img>
                <h1>Salão Senac</h1>
                <div>

                    <a href="https://www.instagram.com/senacpe" target="_blank"><button><i class="bi bi-instagram"></i></button></a>
                    <a href="https://www.youtube.com/user/SenacPernambuco" target="_blank"><button><i class="bi bi-youtube"></i></button></a>
                    <a href="https://x.com/senacpe" target="_blank"><button><i class="bi bi-twitter-x"></i></button></a>
                    <a href="https://www.facebook.com/senacpe" target="_blank"><button><i class="bi bi-facebook"></i></button></a>
                    <a href="https://www.linkedin.com/company/senacpe" target="_blank"><button><i class="bi bi-linkedin"></i></button></a>

                </div>

                </div>
                <div className={styles.secondNavbar}>
                    <a href="#inicio">Início</a>
                    <a href="#services">Serviços</a>
                    <a href="#localizacao">Localização</a>
                    <a href="#Feedback">Feedback</a>
                    <a href="componentes/cadastro.html">Agendar serviço</a>
                </div>
            </nav>

            <section className={styles.containerQuemSomos} >
                <img src={MocaSalao} />
                <div style={{display: 'block', width: '500px', fontSize: '20px', marginLeft: '200px'}} >
                    <h2>Quem somos?</h2>
                    <p>
                        No <strong>Recife</strong>, o Senac dispõe de 
                        uma unidade <strong>especializada</strong> em 
                        serviços na área de beleza, 
                        estética e bem-estar para atender
                        ao púbico em geral. O <strong>Salão 
                        Empresa Pedagógica</strong> conta com 
                        uma estrutura moderna e profissionais
                        altamente qualificados, para 
                        proporcionar os cuidados que você
                        precisa. São oferecidos serviços 
                        de <strong>manicure, pedicure, cortes 
                        masculinos e femininos, mechas
                        e cuidados com todos os tipos 
                        de cabelo, design de sobrancelha, 
                        depilação, massagem, podologia, </strong>
                        entre outros.
                    </p>

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