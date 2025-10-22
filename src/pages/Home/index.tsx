import { Container } from "../../components/Container"
import { CountDown } from "../../components/CountDown"
import { MainForm } from "../../components/MainForm"
import { MainTemplate} from "../../../templates/MainTemplate"
import type { TaskStateModel } from "../../models/TaskStateModel"

export type HomeProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>,
};

export function Home() {

    return (
        <MainTemplate>
            <Container>
                <CountDown />
            </Container>

            <Container>
                <MainForm  />
            </Container>
        </MainTemplate>
    )
}