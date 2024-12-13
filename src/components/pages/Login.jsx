import styles from './Login.module.css'
import { useState } from 'react';
import Logo from '../../assets/logoSenac.png'

import Input from '../form/Input';
import Button from '../form/Button';

import "bootstrap-icons/font/bootstrap-icons.css";

function Login() {

    const [userName, setUserName] = useState('');

    return (
        <div className={styles.body} >
            <main className={styles.loginRegister} >
                <div className={styles.login} >
                    <h2>Olá{userName ? ` ${userName}` : ''}, seja bem-vindo(a) de volta!</h2>
                    <div>
                    <img style={{width: "100px", margin: "0.7rem 0 1rem 0"}} src={Logo} />
                    </div>
                    <Input 
                    placeholder={"e-mail"}
                    variant={"normal"}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                    <div style={{width: "0px", height: "0.6rem"}} ></div>
                    <Input 
                    placeholder={"senha"}
                    variant={"normal"}
                    type={"password"}
                    />
                    <a href='#' >Esqueceu sua senha? Clique aqui.</a>
                    <Button
                    text={"entrar"}
                    variant={"larger"}
                    />
                    <p>OU</p>

                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}} >

                        <Button
                            text={"fazer login com sua conta Google"}
                        />
                        
                    </div>

                        <div style={{width: "0px", height: "1.5rem"}} ></div>

                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}} >

                        <Button
                            text={"Fazer login com sua conta Apple"}
                        />

                    </div>
                </div>
                <div className={styles.register} >
                <h2>É novo por aqui? Cadastre-se abaixo.</h2>
                    <Input 
                    placeholder={"nome completo"}
                    variant={"normal"}
                    />
                    <Input 
                    placeholder={"e-mail"}
                    variant={"normal"}
                    />
                    <Input 
                    placeholder={"senha"}
                    variant={"normal"}
                    type={"password"}
                    />
                    <Input 
                    placeholder={"confirme a senha"}
                    variant={"normal"}
                    type={"password"}
                    />
                    <p style={{textAlign: "start"}} >Ao clicar em cadastrar-se, você 
                        concorda<br/> com nossos <a>Termos</a>,
                        <a>Política de Privacidade</a><br/>e 
                        <a> Política de Cookies</a>.
                    </p>
                    <Button
                    text={"cadastre-se"}
                    variant={"larger"}
                    />
                </div>
            </main>
        </div>
    )
}

export default Login;