import { Negociacao } from './negociacao.js';
import {Imprimivel} from "../utils/imprimivel.js";

export class Negociacoes implements Imprimivel{
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        // criando um log que vai trazer as informações com espaçamento de 2 entre as linhas
        return JSON.stringify(this.negociacoes, null, 2)
    }
}
