import styles from './LandingPage.module.css'
import { useNavigate } from 'react-router-dom';

import Button from '../form/Button';
import FeedbackList from '../feedback/FeedbackList';
import FeedbackForm from '../feedback/FeedbackForm';

import LogoSenac from '../../assets/logoSenac.png'
import MocaSalao from '../../assets/mocasalao.png'

import Depi from '../services/depi.jsx';
import Barba from '../services/barba.jsx';
import Tratamento from '../services/tratamento.jsx';

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
    

const navigate = useNavigate();

const handleButtonClickFeedback = () => {
          navigate('/feedback'); 
          console.log('Deu certo meu chapa!')
};
const handleButtonClickScheduleTime = () => {
          navigate('/login'); 
          console.log('Deu certo meu chapa!')
};
const handleButtonClickDepi = () => {
    navigate('/depi'); // Certifique-se de que a rota "/depi" está definida
    console.log('Navegando para a página de Depilação!');
  };
  const handleButtonClickBarba = () => {
    navigate('/barba'); 
    console.log('Navegando para a página de Barba!');
  };
  const handleButtonClickTratamento = () => {
    navigate('/tratamento'); 
    console.log('Navegando para a página de Tratamento!');
  };

    
    return (
        <div className={styles.bodyy} style={{width: '100vw', margin: '0px', padding: '0px'}} >
            
            
                <nav className={styles.mainNavbar} >

                <img src={LogoSenac} style={{width: '110px', height: '70px'}} ></img>
                <h1>Salão Senac</h1>
                <div>

                    <a href="https://www.instagram.com/senacpe" target="_blank"><button><i className="bi bi-instagram"></i></button></a>
                    <a href="https://www.youtube.com/user/SenacPernambuco" target="_blank"><button><i className="bi bi-youtube"></i></button></a>
                    <a href="https://x.com/senacpe" target="_blank"><button><i className="bi bi-twitter-x"></i></button></a>
                    <a href="https://www.facebook.com/senacpe" target="_blank"><button><i className="bi bi-facebook"></i></button></a>
                    <a href="https://www.linkedin.com/company/senacpe" target="_blank"><button><i className="bi bi-linkedin"></i></button></a>

                </div>

                </nav>
                <div className={styles.secondNavbar}>
                    <a href="#start">Início</a>
                    <a href="#services">Serviços</a>
                    <a href="#location">Localização</a>
                    <a href="#Feedback">Feedback</a>
                    <a href="componentes/cadastro.html">Agendar serviço</a>
                </div>
            

            <section className={styles.containerQuemSomos} id='start'>
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
                <br />

                    <Button
                    text={'Agendar Horário'}
                    onClick={handleButtonClickScheduleTime}
                    />
                </div>
                
            </section>
            <section className={styles.containerNossosServicos} id='services'>
                <h3>Nossos Serviços</h3>
                    <div style={{display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap'}} >
                        <div className={styles.cardServicos} onClick={handleButtonClickBarba} >
                            <img src={Iconbarbeiro} style={{width: '50px'}} />
                            <p style={{fontSize: '20px'}} >Serviços de<br/> Barba</p>
                        </div>
                        <div className={styles.cardServicos}  onClick={handleButtonClickTratamento}>
                            <img src={Iconefeito} style={{width: '50px'}} />
                            <p style={{fontSize: '20px'}} >Serviços de<br/> Tratamento</p>
                        </div>
                        <div className={styles.cardServicos}  onClick={handleButtonClickDepi} >
                            <img src={Icondepilacao} style={{width: '50px'}} />
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
            <section className={styles.containerNossaLocalizacao} id='location'>
                <div>
                    <h3>Onde ficamos localizados?</h3>
                    <p>Av. Visconde de Suassuna 500, Recife, PE, 50050-540</p>
                    <a href="https://www.bing.com/maps?osid=ac6baf46-d541-4755-b973-758f4d7f18a7&cp=-8.052388%7E-34.880605&lvl=16.0&imgid=82b41084-49c3-4c52-b484-73b9102d6ed8&v=2&sV=2&form=S00027">
                    <br />
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
            <section className={styles.DeixeSeuFeedback} >
                <FeedbackList />
                <br />
                <Button 
                    text={"FeedBack"}
                    onClick={handleButtonClickFeedback}
                />
            </section>
            <footer>
                <p style={{color:"white"}}>© 2024 Salão Senac</p>
                <p style={{marginTop: "20px" , color:"white"}} >Senac Pernambuco (sede)<br/> Central de Atendimento: Segunda a Sexta (8h às 20h) e Sábados (8h30 às 12h)<br/> Telefones: (81) 3413.6666 / 6728 / 6729 / 6730</p>
            </footer>

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