module.exports = (app) => {
    app.patch('/user/change-avatar', (request, response) => {
        return response.json({
            success: {
                message: 'CHANGE_AVATAR_SUCCESSFULLY'
            }
        });
    });

    app.patch('/user/change-character', (request, response) => {
        return response.json({
            success: {
                message: 'CHANGE_CHARACTER_SUCCESSFULLY'
            }
        });
    });

    app.patch('/user/change-mural', (request, response) => {
        return response.json({
            success: {
                message: 'CHANGE_MURAL_SUCCESSFULLY'
            }
        });
    });

    app.patch('/user/change-name', (request, response) => {
        return response.json({
            success: {
                message: 'CHANGE_NAME_SUCCESSFULLY'
            }
        });
    });

    app.patch('/user/change-ninja-style', (request, response) => {
        return response.json({
            success: {
                message: 'CHANGE_NINJA_STYLE_SUCCESSFULLY'
            }
        });
    });

    app.patch('/user/change-password', (request, response) => {
        return response.json({
            success: {
                message: 'CHANGE_PASSWORD_SUCCESSFULLY'
            }
        });
    });

    app.patch('/user/change-village', (request, response) => {
        return response.json({
            success: {
                message: 'CHANGE_VILLAGE_SUCCESSFULLY'
            }
        });
    });
};