import { Container } from "../../Container"
import styles from "./styles.module.css"
import { useTaskContext } from "../../../contexts/TaskContext/UseTaskContext"
import { Heading } from "../../Heading"
import { DefaultButton } from "../../DefaultButton"
import { TrashIcon } from "lucide-react"
import { formatDate } from "../../../utils/formatDate"
import { getTaskStatus } from "../../../utils/getTaskStatus"
import { sortTasks, type SortTasksOptions } from "../../../utils/sortTasks"
import { useEffect, useState } from "react"
import { TaskActionsTypes } from "../../../contexts/TaskContext/taskAction"
import { GenericHTML } from "../../GenericHTML"
import { Dialog } from "../../Dialog"
import { toast } from "react-toastify"
import { showMessage } from "../../../adapters/showMessage"

export function HistComp() {

  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>(
    () => {
      return {
         tasks: sortTasks({tasks: state.tasks}),
         field: "startDate",
          direction: "desc"
        }
    }
  );

  function handleSortTasks({field}: Pick<SortTasksOptions, 'field'>) {

    const newDirection = sortTasksOptions.direction === "desc" ? "asc" : "desc";

    setSortTasksOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTasksOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  };

  useEffect(() => {
    setSortTasksOptions(prevState => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        field: prevState.field,
        direction: prevState.direction,
      }),
    }));
  }, [state.tasks]);

  function handleClearHistory() {

    showMessage.confirm("Tem certeza que deseja limpar o histórico de tarefas?", (confirmation) => {
      if (confirmation) {
        dispatch({type: TaskActionsTypes.RESET_STATE});
        toast.success("Histórico de tarefas limpo com sucesso!");
      }
    });

  }

  return (
    <>
    <Container>
      <Heading>
        <span>Histórico</span>
        {hasTasks && (
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color="red"
              aria-label="Limpar histórico"
              title="Limpar histórico"
              onClick={handleClearHistory} />
          </span>
        )}
      </Heading>
    </Container>

    {!hasTasks && (
      <Container>
        <GenericHTML>
          Não há nenhuma tarefa no histórico. <br />Inicie uma nova tarefa para ver o histórico aqui.
        </GenericHTML>
      </Container>
    )}

    {hasTasks && (
      <Container>
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th className={styles.thSort} onClick={() => handleSortTasks({field: 'name'})}>Tarefa</th>
                  <th className={styles.thSort} onClick={() => handleSortTasks({field: 'duration'})}>Duração</th>
                  <th className={styles.thSort} onClick={() => handleSortTasks({field: 'startDate'})}>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>


              <tbody>
                {sortTasksOptions.tasks.map(task => {

                  const taskTypeDict = {
                    workTime: "Foco",
                    shortRest: "Descanso Curto",
                    longRest: "Descanso Longo"
                  };

                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration}min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDict[task.type]}</td>

                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

        </Container>
    )}
      </>
  )
}