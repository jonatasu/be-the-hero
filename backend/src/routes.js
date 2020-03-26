const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');


const routes = express.Router();

// ROTA => Homepage
routes.get('/', (request, response) => {
    response.json({
        _acao: 'Access Homepage',
        evento: 'Semana OmniStack 11.0',
        aluno: 'Jônatas Filipe Vieira'
    })
});

// ROTA => Session (Login)
routes.post('/sessions', SessionController.create)

// ROTA => Lista de ONGs
routes.get('/ongs', OngController.index);
// ROTA => Criar ONG
routes.post('/ongs/create', OngController.create);


// ROTA => Lista de Casos
routes.get('/incidents', IncidentController.index);
// ROTA => Criar Caso
routes.post('/incidents/create', IncidentController.create);
// ROTA => Deletar Caso
routes.delete('/incidents/delete/:id', IncidentController.delete);


// ROTA => Lista de Casos ESPECÍFICOS de uma ONG
routes.get('/profile', ProfileController.index);


module.exports = routes;