import './styles/theme.css';
import './styles/global.css';
import { Home } from './pages/Home';
import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';
import { TaskContext, TaskContextProvider } from './contexts/TaskContext';
// import { NotFound } from './pages/NotFound';
// import { AboutPomodoro } from './pages/AboutPomodoro';

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formatedSecondsRemaining: '00:00',
    activeTask: null,
    currentCycle: 0,
    config: { 
        workTime: 25,
        shortRest: 5,
        longRest: 15,
    },
};


export function App() {
    const [state, setState] = useState(initialState);

    return (
        <TaskContextProvider>
            <Home />);
        </TaskContextProvider>
    );
}