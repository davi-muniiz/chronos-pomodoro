import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';


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
                    <DefaultInput labelText="Task" type='text' id='meuInput' placeholder='Ex: Estudar'></DefaultInput>
                </div>
                <div className="formRow">
                    <p>Nesse ciclo foque por 25 min.</p>
                </div>
                
                <div className="formRow">
                    <Cycles></Cycles>
                </div>
                
                <div className="formRow">
                    <DefaultButton icon={< PlayCircleIcon/>}/ >
                </div>
            </form>
        </Container>
    </>;
}

export {App};