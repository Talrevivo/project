


var project = {

    dict: [],

   
    sendMail: function () {
        window.open('mailto:Nikitas.savings@gmail.com?subject=' + project.dict[0].key + '&body=' + project.dict[0].value);
    },


    getUrlVars:  function () {
        var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
});
return vars;
},


    addUserAnswer: function (keyFromUI) {
     var params =  project.getUrlVars();
            project.dict.push({
                key: keyFromUI,
                value: "dsd"
            });
            var temp = $(custId).val();
            var temp2 = 3;
    }

}











