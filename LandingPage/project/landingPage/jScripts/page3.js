


var page3 = {

    dict: [],

    paramsString: '',


    getUrlVars: function () {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    },


    addUserAnswer: function (answer) {
        var prevParams = page3.getUrlVars();
        prevParams['Question3'] = answer;

        page3.paramsString = 'Question1=' + prevParams.Question1 + '&Question2=' + prevParams.Question2 + '&Question3=' + prevParams.Question3;
        $("#"+answer).attr("href", "page4.html?" + page3.paramsString);
        var temp = "";

    }

}











