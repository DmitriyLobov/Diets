/**
 * Created by Dmitriy on 14.04.2015.
 */

$(document).ready(function(){
    var logBtn = $("#logBtn");
    var signBtn = $("#signBtn");
    var SignContainer = $("#SignContainer");
    var logContainer = $("#logContainer");

    logContainer.hide();

    logBtn.click(function(){
        logContainer.show();
        SignContainer.hide();
    });

    signBtn.click(function(){
        logContainer.hide();
        SignContainer.show();

    });



});