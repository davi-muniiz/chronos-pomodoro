import type { TaskStateModel } from "../models/TaskStateModel";

let instance:TimerWorkerManager | null = null

// Padrão de Projeto Singleton
// Só há somente uma instancia, por isso, toda vez que qualquer task foi iniciada e cancelada...
// a instancia continua.

export class TimerWorkerManager {

    
    private worker: Worker;

    // Construtor privado: impede que a classe seja instanciada diretamente (padrão Singleton).
    // Dentro dele, é criado um novo Web Worker responsável por executar tarefas em segundo plano,
    // sem bloquear a thread principal do navegador.
    //
    // A expressão `new URL('./timerWorker.js', import.meta.url)` gera a URL absoluta do arquivo
    // do worker, garantindo compatibilidade com bundlers (como Vite e Webpack).
    // Assim, `this.worker` passa a representar o worker ativo que poderá enviar e receber
    // mensagens assíncronas para controle do timer.

    private constructor() {
        this.worker = new Worker(new URL('./timerWorker.js', import.meta.url));
    }

    static getInstance(){

        // Se instância = false -> cria a instancia...
        if (!instance) {
            instance = new TimerWorkerManager();
        }

        // se true, somente retorna a instância.
        return instance;
    }

    postMessage(message: TaskStateModel) {
        this.worker.postMessage(message);
    }

    onmessage(cb: (e:MessageEvent) => void) {
        this.worker.onmessage = cb;
    }

    terminate() {
        this.worker.terminate();
        instance = null
    }
}