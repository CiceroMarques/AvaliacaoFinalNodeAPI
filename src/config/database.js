import { Sequelize } from 'sequelize'

//apenas configurar a conexão

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize({
            dialect: 'postgres',
            database: 'exemplo_b0kv',
            username: 'exemplo_b0kv_user',
            password: 'iIwyTyqg2Rrua8bC0bYrgtZG181zzuIO',
            host: 'dpg-dbh7e0mk1f9s73atnr4g-a.ohio-postgres.render.com',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnautorized: false
                }
            }
        })
    }

}

export default new Database()