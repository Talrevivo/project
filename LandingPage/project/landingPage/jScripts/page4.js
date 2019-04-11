var page4 = {

    dict: [],

    paramsString: '',
    subject: 'תשובות סקר',


    getUrlVars: function () {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    },


    sendMail: function () {
        var prevParams = page4.getUrlVars();
        var name = $(TXTName).val();
        var phone = $(TXTPhone).val();


        page4.paramsString = 'שאלה 1: ' + prevParams.Question1 +"%0D%0A"+
            'שאלה 2: ' + prevParams.Question2 + "%0D%0A" +
            'שאלה 3: ' + prevParams.Question3 + "%0D%0A" + 
            'שם: ' + name + "%0D%0A" +
        'טלפון: ' + phone;
        window.open('mailto:Nikitas.savings@gmail.com?subject=' + page4.subject + '&body=' + page4.paramsString);
        var temp = "";

    }

}