export function getNextCycle(currentCycle: number) {
    return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}

// Recebe o currentCycle como param. para 'descobrir' qual será o próximo.
// Verifica se é igual a 0, se = 8 -> 1, se nenhum, + 1.