import { useEffect } from "react";
import { MainTemplate } from "../../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { HistComp } from "../../components/HistoricoComp/HistComp";

export function Historico() {
  useEffect(() => {
      document.title = 'Histórico - Chronos Pomodoro';
    }, []);

  return (
    <MainTemplate>
      <Container>
        <HistComp />
      </Container>
    </MainTemplate>
  )};