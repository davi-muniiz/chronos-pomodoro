import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";
import { useState } from "react";


export function MainForm() {

    const [taskName, setTaskName] = useState();

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    };


    return (
        <form onSubmit={handleCreateNewTask} action="" className='form'>
                <div className="formRow">
                    <DefaultInput 
                    labelText="Text" 
                    type='text' 
                    id='meuInput' 
                    placeholder='Ex: Estudar' 
                    value={taskName} 
                    onChange={e => setTaskName(e.target.value)}></DefaultInput>
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
    );
};