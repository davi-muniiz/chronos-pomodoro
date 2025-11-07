import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessageContainer } from './components/MessagesContainer';
import { RoutesLink } from './RoutesLink';

export function App() {

    return (
        <TaskContextProvider>
                <MessageContainer> 
                    <RoutesLink/>
                </MessageContainer>
        </TaskContextProvider>
    );
}