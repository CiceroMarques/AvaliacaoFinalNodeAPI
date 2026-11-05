import Cliente from '../model/cliente.js'
import atendimento from './atendimento.js';


class ServiceCliente {

    async Buscar() {
        return Cliente.findAll()
    }

    BuscarUm(id) {
        if (!id || isNaN(id)) {
            throw new Error("Favor informar somente números");
        }

        return Cliente.BuscarUm(id)
    }

    async Criar(nome, email, senha) {
        if (!nome || !email || !senha) {
            throw new Error("Favor informar o nome, email e senha")
        }

        await Cliente.create({ nome, email, senha })
    }

    async Alterar(id, nome, email) {
        if (!id || isNaN(id) || !nome || !email) {
            throw new Error("Favor informar todos os dados")
        }

        const clienteAlterar = await Cliente.findByPk(id)

        if (!clienteAlterar) {
            throw new Error("Cliente não encontrado");
        }

        clienteAlterar.nome = nome,
        clienteAlterar.email = email

        await clienteAlterar.save()

    }

    async Deletar(id) {
        if (!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }

        const clienteDelete = await Cliente.findByPk(id) //buscar detalhe 'await pessoaDelete.save'

        if (!clienteDelete) {
            throw new Error("Por favor informar o Id Corretamente");
        }

        await clienteDelete.destroy()
    }

}

export default new ServiceCliente()