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
};