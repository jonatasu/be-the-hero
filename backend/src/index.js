const express = require('express');
const cors = require('express');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na roa após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

/**
 * ENTIDADES
 * - ONG
 * - Caso (incident)
 */

/**
 * FUNCIONALIDADES
 * - Login de ONG
 * - Logout de ONG
 * - Cadastro de ONG
 * - Cadastrar novos Casos
 * - Listar Casos específicos de uma ONG
 * - Deletar Casos específicos de uma ONG
 * - Listar TODOS os Casos
 * - Entrar em contato com a ONG (whatsapp, email)
 */


app.listen(3333);