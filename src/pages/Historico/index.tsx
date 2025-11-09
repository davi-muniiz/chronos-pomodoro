import { MainTemplate } from "../../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { HistComp } from "../../components/HistoricoComp/HistComp";

export function Historico() {
  return (
    <MainTemplate>
      <Container>
        <HistComp />
      </Container>
    </MainTemplate>
  )};