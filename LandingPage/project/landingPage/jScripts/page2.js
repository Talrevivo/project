


var page2 = {

    dict: [],

    paramsString: '',


    getUrlVars:  function () {
        var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
});
return vars;
},


    addUserAnswer: function () {
        var prevParams = page2.getUrlVars();
        var text = $(TXT2).val();
        prevParams['Question2'] = text;

        page2.paramsString = 'Question1=' + prevParams.Question1 + '&Question2=' + prevParams.Question2;
        $(Continued).attr("href", "page3.html?" + page2.paramsString);

    }

}











