
import { MainTemplate } from "../../../templates/MainTemplate";
import { ConfigComp } from "../../components/ConfigComp/Config";
import { Container } from "../../components/Container";
import { GenericHTML } from "../../components/GenericHTML";
import { Heading } from "../../components/Heading";

export function Config() {

    return (
        <MainTemplate>
          <Container>
            <Heading>
              Configurações
            </Heading>
            <GenericHTML>
              Ajuste as configurações do seu temporizador Pomodoro.
            </GenericHTML>
          </Container>



          <Container>
            <ConfigComp />
          </Container>

        </MainTemplate>
    )
}