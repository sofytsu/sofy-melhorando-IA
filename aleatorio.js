const nomes = ["Sofia", "Bruno", "Maria Eduarda", "Maria Luiza", "Samira", "Silvia", "Jhonatan"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
