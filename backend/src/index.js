const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); /** confirma que o trafego é em Json */
app.use(routes); /** starta as routes*/

app.listen(3333);


/**
 * get('/') é para definir os recursos tipo
 * 
 */

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma inforamção no back-end
 */

 /**
  * Tipos de Parâmetros
  * 
  * Query Parms: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

   /**
   * return response.send('Hello World');
   *  */ 

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('user').select('*').where()
  */



