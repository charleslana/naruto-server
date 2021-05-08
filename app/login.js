module.exports = (app) => {
    app.get('/login/online', (request, response) => {
        return response.json({
            success: true,
            users: [
                {
                    name: 'Name A',
                    village: 1,
                    level: 1,
                    score: 1000,
                    clan: 'Clan'
                },
                {
                    name: 'Name B',
                    village: 3,
                    level: 5,
                    score: 2000,
                    clan: ''
                }
            ]
        });
    });

    app.get('/login/events', (request, response) => {
        return response.json({
            success: true,
            events: [
                {
                    name: 'LOGIN_ACTIVE_EVENTS_DATA_BOSS',
                },
                {
                    name: 'LOGIN_ACTIVE_EVENTS_DATA_ZETSU',
                }
            ]
        });
    });

    app.post('/login', (request, response) => {
        return response.json({
            success: {
                message: 'LOGIN_BAD_REQUEST_INVALID_CREDENTIALS'
            },
            user: {
                'email': 'teste@teste.com',
                'name': 'teste',
                'level': 1,
                'styleNinja': 2,
                'village': 3,
                'minExperience': 0,
                'maxExperience': 100,
                'minLife': 100,
                'maxLife': 100,
                'minChakra': 100,
                'maxChakra': 100,
                'minYing': 30,
                'maxYing': 30,
                'minYang': 30,
                'maxYang': 30,
                'yens': 2240000,
                'credits': 1200,
                'character': 46,
                'avatarName': 'Naruto',
                'avatarImage': 5,
                'premium': true,
                'clan': false,
                'mural': ''
            }
        });
    });
};