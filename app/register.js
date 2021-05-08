module.exports = (app) => {
    app.post('/register', (request, response) => {
        return response.json({
            success: {
                message: 'REGISTER_SUCCESSFULLY'
            }
        });
    });
};