import mssql from 'mssql'
import dotenv from 'dotenv'

dotenv.config();

export const sqlConfig = {
    //enter custom server credential
    user: '',
    password: '',
    database: '',
    server: "",
    // port: 1433,

    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },

    options:{
        encrypt: false,
        trustServerCertificate: true
    }
}