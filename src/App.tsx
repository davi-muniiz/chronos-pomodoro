import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';


function App() {
    console.log('oi');
    
    return <>
        <Container>
            <Logo />
        </Container>

        <Container>
            <Menu />
        </Container>
    </>;
}

export {App};