import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';


function App() {
    console.log('oi');
    
    return <>
        <Container>
            <Logo />
        </Container>

        <Container>
            <Menu />
        </Container>
        <Container>
            <CountDown />
        </Container>

        <Container>
            <form action="" className='form'>
                <div className="formRow">
                    <DefaultInput labelText="Task" type='number' id='meuInput' placeholder='Ex: Estudar'></DefaultInput>
                </div>
                <div className="formRow">
                    <p>Nesse ciclo foque por 25 min.</p>
                </div>
                
                <div className="formRow">
                    <p>Ciclos</p>
                    <p>0 0 0 0 0 0</p>
                </div>
                
                <div className="formRow">
                    <button>Enviar</button>
                </div>
            </form>
        </Container>
    </>;
}

export {App};