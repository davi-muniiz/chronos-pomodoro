
import { MainTemplate } from "../../../templates/MainTemplate";
import { ConfigComp } from "../../components/ConfigComp/Config";
import { Container } from "../../components/Container";

export function Config() {

    return (
        <MainTemplate>
          <Container>
            <ConfigComp />
          </Container>

        </MainTemplate>
    )
}