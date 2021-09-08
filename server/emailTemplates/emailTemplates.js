const emailTemplates = {
    accountActivation: (userId) => {
        return (
            `\
            <body>\
                <h2>Hello and thank you for registering!</h2>\
                <br />\
                <h4>Click on the link below to activate your account:</h4>\
                <a href='${process.env.BASE_URL}/users/activate/${userId}'>\
                    <h4>Activate my account</h4>\
                </a>\
                <br />\
                <h3>Best regards from our team!</h3>\
            </body>\
            `
        );
    }
}

module.exports = { emailTemplates };
