/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    $(".option-menu").click(function() {
        $("#menu").hide();
        $("#back-button").show();
        switch (this.firstChild.data) {
            case "Button generator":
                $("#button-generator-div").show();
                $("#button-result").css("font-size", $("#font-size-property")[0].value + "px");
                $("#button-result").css("background-color", $("#background-color-property")[0].value);
                $("#button-result").css("color", $("#font-color-property")[0].value);
                $("#button-result").css("box-shadow", $("#horizontal-shadow-property")[0].value + "px " + $("#vertical-shadow-property")[0].value + "px " + $("#blur-shadow-property")[0].value + "px " + $("#color-shadow-property")[0].value);

                break;
        }
    });

    $("#back-button").click(function() {
        $("#menu").show();
        $("#back-button").hide();
        $("#button-generator-div").hide();
    });

    // Change values of the button generator
    $("#button-generator-div .lessVariable").change(function() {
        switch (this.id) {
            case "font-size-property":
                $("#button-result").css("font-size", $(this)[0].value + "px");
                break;
            case "background-color-property":
                $("#button-result").css("background-color", $(this)[0].value);
                break;
            case "font-color-property":
                $("#button-result").css("color", $(this)[0].value);
                break;
            case "horizontal-shadow-property":
                $("#button-result").css("box-shadow", $(this)[0].value + "px " + $("#vertical-shadow-property")[0].value + "px " + $("#blur-shadow-property")[0].value + "px " + $("#color-shadow-property")[0].value);
                break;
            case "vertical-shadow-property":
                $("#button-result").css("box-shadow", $("#horizontal-shadow-property")[0].value + "px " + $(this)[0].value + "px " + $("#blur-shadow-property")[0].value + "px " + $("#color-shadow-property")[0].value);
                break;
            case "blur-shadow-property":
                $("#button-result").css("box-shadow", $("#horizontal-shadow-property")[0].value + "px " + $("#vertical-shadow-property")[0].value + "px " + $(this)[0].value + "px " + $("#color-shadow-property")[0].value);
                break;
            case "color-shadow-property":
                $("#button-result").css("box-shadow", $("#horizontal-shadow-property")[0].value + "px " + $("#vertical-shadow-property")[0].value + "px " + $("#blur-shadow-property")[0].value + "px " + $(this)[0].value);
                break;
        }

    });
});

