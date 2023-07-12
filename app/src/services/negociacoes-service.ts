import {Negociacao} from "../models/negociacao.js";
import {NegociacaoDoDia} from "../interfaces/negociacao-do-dia.js";

export class NegociacoesService {
    public obterNegociacoesDoDia(): Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
            .then(res => {
                return res.json();
            })
            .then((dados: NegociacaoDoDia[]) => {
                return dados.map(dadosDeHoje => {
                    return new Negociacao(new Date(), dadosDeHoje.vezes, dadosDeHoje.montante);
                })
            });
    }
}