import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { handleLogin } from '../../api/api';
import { handleRegister } from '../../api/api';

import styles from './Login.module.css'
import Logo from '../../assets/logoSenac.png'


import Input from '../form/Input';
import Button from '../form/Button';
import Toast from '../form/Toast'

import "bootstrap-icons/font/bootstrap-icons.css";

function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    const showToast = (message, type) => {
        setToast({ show: true, message, type });

        setTimeout(() => setToast({ show: false, message: '', type: '' }), 3000); // fecha automaticamente após 3 segundos
    };

    const navigate = useNavigate();

    const handleButtonClickScheduling = () => {
        navigate('/scheduling'); 
        console.log('Deu certo meu chapa!')
    };

    const onLogin = async () => {
        try {
            // Chama a função handleLogin do arquivo api.js
            const user = await handleLogin(email, password);
            if (email == 'admin@senac.com' && password == 'admin123'){
                console.log('até aqui tudo certo!')
                navigate('/clientes');
            }
            if (!email || !password) {
                showToast('Por favor, preencha todos os campos.', 'error');
                return;
            }
            if (user && user.name) {
                showToast(`Bem-vindo(a), ${user.name}!`, 'success')

                localStorage.setItem('user', JSON.stringify(user)); // Salva no localStorage
                navigate('/scheduling');
            } else {
                showToast('Email ou senha inválidos!', 'error')
            }
        } catch (error) {
            showToast('Erro ao fazer o login, tente novamente mais tarde!', 'error')
            console.error(error);
        }
    };
    
    const onRegister = async () => {
        // Validação básica
        if (!email || !password || !name) {
            showToast('Por favor, preencha todos os campos.', 'error');
            return;
        }
        if (password !== confirmPassword ) {
        showToast('A senha direfente porra', 'error')
          return;
        }
        if (password.length < 6) {
        showToast('A senha precisa ter 6 caracter imbecil', 'error')
            return;
        }
            try {
                //objeto!!!!!
            const userData = { name, email, password };
                // Chama a função de registro
            const user = await handleRegister(userData);
            showToast('Cadastrou bucetinha tu é foda, agora faz o login faz safado', 'success')
            } 
            catch (error) {
                showToast('Ocorreu um erro ao cadastrar o usuário, tente novamente mais tarde!', 'error')
            console.error(error);
            }
        };

    return (
        <div className={styles.body} >
            <main className={styles.loginRegister} >

                {toast.show && (
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        closeToast={() => setToast({ show: false, message: '', type: '' })}
                    />
                )}

                <div className={styles.login} >
                    <h2>Olá{name ? ` ${name}` : ''}, seja bem-vindo(a) de volta!</h2>
                    <div>
                    <img style={{width: "100px", margin: "0.7rem 0 1rem 0"}} src={Logo} />
                    </div>
                    <Input 
                    placeholder={"nome"}
                    variant={"normal"}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <Input 
                    placeholder={"e-mail"}
                    variant={"normal"}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <div style={{width: "0px", height: "0.6rem"}} ></div> */}
                    <Input 
                    placeholder={"senha"}
                    variant={"normal"}
                    type={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <a href='#' >Esqueceu sua senha? Clique aqui.</a>
                    <Button
                    text={"entrar"}
                    variant={"larger"}
                    onClick={onLogin}
                    />
                    <p>OU</p>

                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}} >

                        <Button
                            text={"fazer login com sua conta Google"}
                        />
                        <i style={{color: "lightgrey", marginLeft: "10px", fontSize: "30px"}} class="bi bi-google"></i>
                        
                    </div>

                        <div style={{width: "0px", height: "1rem"}} ></div>

                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}} >

                        <Button
                            text={"Fazer login com sua conta Apple"}
                        />
                        <i style={{color: "lightgrey", marginLeft: "10px", fontSize: "30px"}} class="bi bi-apple"></i>

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
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                    placeholder={"senha"}
                    variant={"normal"}
                    type={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input 
                    placeholder={"confirme a senha"}
                    variant={"normal"}
                    type={"password"}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <p style={{textAlign: "start"}} >Ao clicar em cadastrar-se, você 
                        concorda<br/> com nossos <a>Termos</a>,
                        <a>Política de Privacidade</a><br/>e 
                        <a> Política de Cookies</a>.
                    </p>
                    <Button
                    text={"cadastre-se"}
                    variant={"larger"}
                    onClick={onRegister}
                    />
                </div>
            </main>
        </div>
    )
}

export default Login;