import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading.tsx';
import {Container} from "./components/Container.tsx"
import { TimerIcon } from 'lucide-react';

function App() {
    console.log('oi');
    
    return <>
        <Container>
            <Heading>Logo</Heading>
        </Container>

        <Container>
            <Heading>Menu</Heading>
        </Container>
        
        <Container>
            <section>
                Form
            </section>
        </Container>
        
        <Container>
            <section>
                Footer
            </section>
        </Container>
    </>;
}

export {App}