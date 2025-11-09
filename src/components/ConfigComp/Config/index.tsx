import { useRef } from "react";
import { useTaskContext } from "../../../contexts/TaskContext/UseTaskContext";
import { DefaultInput } from "../../DefaultInput";
import { showMessage } from "../../../adapters/showMessage";
import { DefaultButton } from "../../DefaultButton";
import { Save } from "lucide-react";
import type { TaskStateModel } from "../../../models/TaskStateModel";
import { TaskActionsTypes } from "../../../contexts/TaskContext/taskAction";
import styles from "./styles.module.css";

export function ConfigComp() {

  const {state, dispatch} = useTaskContext();
  
  const configInputs = useRef<HTMLInputElement>(null);

  function handleChangeConfig(e: React.FormEvent<HTMLFormElement>) {
    // Lógica para alterar a configuração
    e.preventDefault();

    if (configInputs.current === null) return;

    const configInputsSet = configInputs.current.value.trim();

    if (!configInputsSet) {
      showMessage.warn("Preencha todos os campos de configuração.");
      return;
    };

    const newConfig: TaskStateModel = {
      ...state,
      config: {
        workTime: Number((document.getElementById("focusTime") as HTMLInputElement).value),
        shortRest: Number((document.getElementById("shortBreakTime") as HTMLInputElement).value),
        longRest: Number((document.getElementById("longBreakTime") as HTMLInputElement).value),
      }
    };

    dispatch({type: TaskActionsTypes.SET_CONFIG, payload: newConfig});
        showMessage.success("Configurações salvas com sucesso!"); 
      

  }

    return (
        <form className={styles.formRow} action="" onSubmit={handleChangeConfig}>
          <div>
            <DefaultInput
              style={{ maxWidth: '75%', alignSelf: 'center' }}
              placeholder="Ex: 30"
              labelText="Tempo de Foco"
              type="number"
              id="focusTime"
              defaultValue={state.config.workTime}
              ref={configInputs}
              />
          </div>

          <div>
            <DefaultInput
              style={{ maxWidth: '75%', alignSelf: 'center' }}
              placeholder="Ex: 5"
              labelText="Tempo de Pausa Curta"
              type="number"
              id="shortBreakTime"
              defaultValue={state.config.shortRest}
              ref={configInputs}
              />
          </div>

          <div>
            <DefaultInput 
              style={{ maxWidth: '75%', alignSelf: 'center' }}
              placeholder="Ex: 15"
              labelText="Tempo de Pausa Longa"
              type="number"
              id="longBreakTime"
              defaultValue={state.config.longRest}
              ref={configInputs}
            />
          </div>

          <div className={styles.buttonContainer}>
            <DefaultButton
              type="submit"
              aria-label="Salvar Configurações"
              title="Salvar Configurações"
              icon={< Save />}
              key='saveConfig'
            />
          </div>
        </form>
    )
}