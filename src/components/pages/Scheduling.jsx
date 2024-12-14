import styles from "./Scheduling.module.css"
import ServiceCard from '../form/ServiceCard'

import Input from "../form/Input";
import Button from "../form/Button";

function Scheduling() {
    return (
        <div className={styles.body} >
            <section className={styles.availability} >
                    <h1>Verificação de disponibilidade</h1>
                <div className={styles.availability_professional} >
                    <ServiceCard 
                    ProfessionalName={"Alice Martins"}
                    FirstService={"Escova simples"}
                    SecondService={"Escova Adequada"}
                    ThirdService={"Escova avançada"}

                    FirstDay={"Segunda-Feira"}
                    SecondDay={"Terça-Feira"}
                    ThirdDay={"Quarta-Feira"}

                    FirstTime={"09:10-09:15"}
                    SecondTime={"10:20-11:00"}
                    ThirdTime={"11:20-11:40"}
                    />
                    <ServiceCard 
                    ProfessionalName={"Clarice Lispector"}
                    FirstService={"Escova simples"}
                    SecondService={"Escova Adequada"}
                    ThirdService={"Escova avançada"}

                    FirstDay={"Segunda-Feira"}
                    SecondDay={"Terça-Feira"}
                    ThirdDay={"Quarta-Feira"}

                    FirstTime={"09:10-09:15"}
                    SecondTime={"10:20-11:00"}
                    ThirdTime={"11:20-11:40"}
                    />
                    <ServiceCard 
                    ProfessionalName={"Pedro Gustavo"}
                    FirstService={"Escova simples"}
                    SecondService={"Escova Adequada"}
                    ThirdService={"Escova avançada"}

                    FirstDay={"Segunda-Feira"}
                    SecondDay={"Terça-Feira"}
                    ThirdDay={"Quarta-Feira"}

                    FirstTime={"09:10-09:15"}
                    SecondTime={"10:20-11:00"}
                    ThirdTime={"11:20-11:40"}
                    />


                </div>
            </section>
            <section className={styles.services} >
                <h1>Agendamento de Serviços</h1>
                <div className={styles.servicesContainer} >
                        <Input 
                        variant={"scheduling"}
                        variantLabel={"labelBlack"}
                        text={"Nome:"}
                        />
                        <Input 
                        variant={"scheduling"}
                        variantLabel={"labelBlack"}
                        text={"Telefone*"}
                        />
                        <Input 
                        variant={"scheduling"}
                        variantLabel={"labelBlack"}
                        type={"email"}
                        text={"E-mail:"}
                        />
                    <label for="profissional">Selecione o Profissional:</label>
                    <select id="profissional" name="profissional" className={styles.servicesSelect} required>
                        <option value="">Selecione...</option>
                        <option value="Ana">Ana</option>
                        <option value="Ricardo">Ricardo</option>
                        <option value="João">João</option>
                        <option value="Danilo">Danilo</option>
                    </select>
                    
                    <label style={{marginTop: '1rem'}} for="servico">Selecione o Serviço:</label>
                    <select id="servico" name="servico" multiple className={styles.servicesSelectPro} required>
                        <option value="Massagem Modeladora|30">Massagem Modeladora</option>
                        <option value="Corte de Cabelo|45">Corte de Cabelo</option>
                        <option value="Barba e Cabelo|50">Barba e Cabelo </option>
                        <option value="Pedicure|45">Pedicure </option>
                        <option value="Massagem Relaxante|90">Massagem Relaxante </option>
                    </select>
                    <label style={{marginTop: '1rem'}}  for="data">Escolha a Data:</label>
                        <input type="date" id="data" name="data" className={styles.servicesSelect} required/>
                        <label style={{marginTop: '1rem'}} for="hora">Escolha o Horário:</label>
                        <input type="time" id="hora" name="hora" className={styles.servicesSelect} required></input>
                        <div style={{height: '2em'}} ></div>
                    <Button 
                    text={"Agendar"}
                    variant={"larger"}
                    /> 
                </div>
            </section>
        </div>
    )
}

export default Scheduling;