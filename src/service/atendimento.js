import atendimento from '../model/atendimento.js';
import Atendimento from '../model/atendimento.js'


class ServiceAtendimento {

    async Buscar() {
        return Atendimento.findAll()
    }

    BuscarUm(id) {
        if (!id || isNaN(id)) {
            throw new Error("Favor informar somente números");
        }
        return Atendimento.BuscarUm(id)
    }

    BuscarConcluido() {
        return Atendimento.findAll({
            where: {
                concluido: false
            }
        })
    }

    async AlterarConcluido(id, concluido) {
        if (!id || isNaN(id)) {
            throw new Error("Favor informar somente números");
        }
        const atendimentoAlterarConcluido = await Atendimento.findByPk(id)
        if (!atendimentoAlterarConcluido) {
            throw new Error("Atendimento não encontrado");
        }
        atendimentoAlterarConcluido.concluido = !concluido;

        await atendimentoAlterarConcluido.save()
    }

    async Criar(dia, hora, valor, concluido) {
        if (!dia || !hora || !valor) {
            throw new Error("Favor informar o dia, hora, valor")
        }
        await Atendimento.create({ dia, hora, valor, concluido })
    }

    async Alterar(dia, hora, valor, concluido) {
        if (!id || isNaN(id) || !dia || !hora || !valor) {
            throw new Error("Favor informar todos os dados")
        }

        const atendimentoAlterar = await Atendimento.findByPk(id)

        if (!atendimentoAlterar) {
            throw new Error("Atendimento não encontrado");
        }
        atendimentoAlterar.dia = dia,
        atendimentoAlterar.hora = hora,
        atendimentoAlterar.valor = valor,
        atendimentoAlterar.concluido = concluido

        await atendimentoAlterar.save()

    }

    async Deletar(id) {
        if (!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }

        const atendimentoDelete = await Atendimento.findByPk(id) //buscar detalhe 'await pessoaDelete.save'

        if (!atendimentoDelete) {
            throw new Error("Por favor informar o Id Corretamente");
        }

        await atendimentoDelete.destroy()
    }

}

export default new ServiceAtendimento()