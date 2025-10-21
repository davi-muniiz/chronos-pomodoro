import { PlayCircleIcon } from "lucide-react";
import styles from "./styles.module.css";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../DefaultInput";

export function MainForm () {
    return (
        <form action="" className='form'>
                <div className="formRow">
                    <DefaultInput labelText="Text" type='text' id='meuInput' placeholder='Ex: Estudar'></DefaultInput>
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