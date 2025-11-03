
// Assume que não está rodando para ficar de acordo com o Padrão Singleton.
let isRunning = false;


self.onmessage = function(event) {
    // Verifica se true, se sim, retorna.
    if (isRunning) return
    
    // Se falso, vira true.
    isRunning = true;

    const state = event.data;
    const  { activeTask, secondsRemaining } = state

    // Pega a data inicial, e o tempo que falta e multiplica por mil...
    // pois o tempo em date.now() é dado em milissegundos.
    const endDate = activeTask.startDate + secondsRemaining * 1000;
    
    const now = Date.now();
    // Math.ceil para arredondar para cima
    let countDownSeconds = Math.ceil((endDate - now) / 1000);

    // A cada segundo essa função é chamada...
    // Aqui é usado math.floor() para o valor ser sempre arredondado para baixo...
    // dessa forma funcionando o decaimento do tempo.
    function tick() {
        self.postMessage(countDownSeconds);

        const now = Date.now();
        countDownSeconds = Math.floor((endDate - now) / 1000);

        setTimeout(tick, 1000);
}
    tick();
;}