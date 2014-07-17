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
                $("#button-generator-div #button-result").css("font-size", $("#button-generator-div #font-size-property")[0].value + "px");
                $("#button-generator-div #button-result").css("border-radius", $("#button-generator-div #border-radius-property")[0].value + "px");
                $("#button-generator-div #button-result").css("padding", $("#button-generator-div #padding-property")[0].value + "px");
                $("#button-generator-div #button-result").css("background-color", $("#button-generator-div #background-color-property")[0].value);
                $("#button-generator-div #button-result").css("color", $("#button-generator-div #font-color-property")[0].value);
                $("#button-generator-div #button-result").css("box-shadow", $("#button-generator-div #horizontal-shadow-property")[0].value + "px " + $("#vertical-shadow-property")[0].value + "px " + $("#blur-shadow-property")[0].value + "px " + $("#color-shadow-property")[0].value);
                $("#button-generator-div #button-result").css("border", $("#button-generator-div #border-size-property")[0].value + "px solid " + $("#border-color-property")[0].value);
                var text_css_code = "font-size:" + $("#button-generator-div #font-size-property")[0].value + "px";
                text_css_code += "\n";
                text_css_code += "border-radius:" + $("#button-generator-div #border-radius-property")[0].value + "px";
                text_css_code += "\n";
                text_css_code += "backgorund-color:" + $("#button-generator-div #background-color-property")[0].value;
                text_css_code += "\n";
                text_css_code += "color:" + $("#button-generator-div #font-color-property")[0].value;
                text_css_code += "\n";
                text_css_code += "border:" + $("#button-generator-div #border-size-property")[0].value + "px solid " + $("#button-generator-div #border-color-property")[0].value;
                text_css_code += "\n";
                text_css_code += "box-shadow:" + $("#button-generator-div #horizontal-shadow-property")[0].value + "px " + $("#button-generator-div #vertical-shadow-property")[0].value + "px " + $("#button-generator-div #blur-shadow-property")[0].value + "px " + $("#button-generator-div #color-shadow-property")[0].value;
                text_css_code += "\n";
                text_css_code += "padding:" + $("#button-generator-div #padding-property")[0].value + "px";
                $("#button-generator-div .css-code").text(text_css_code);
                break;
            case "Menu generator":
                $("#menu-generator-div").show();
                $("#menu-generator-div #menu-result > li").css("border", $("#menu-generator-div #border-menu-size-property")[0].value + "px solid " + $("#menu-generator-div #border-menu-color-property")[0].value);
                $("#menu-generator-div #menu-result > li").css("border-radius", $("#menu-generator-div #border-radius-menu-property")[0].value + "px");
                $("#menu-generator-div #menu-result > li").css("font-size", $("#menu-generator-div #font-size-menu-property")[0].value + "px");
                $("#menu-generator-div #menu-result > li").css("background-color", $("#menu-generator-div #background-color-menu-property")[0].value);
                $("#menu-generator-div #menu-result > li").css("color", $("#menu-generator-div #font-color-menu-property")[0].value);

                break;
        }
    });

    $("#back-button").click(function() {
        $("#menu").show();
        $("#back-button").hide();
        $("#button-generator-div").hide();
        $("#menu-generator-div").hide();
    });

    // Change values of the button generator
    $("#button-generator-div .lessVariable").change(function() {
        switch (this.id) {
            case "font-size-property":
                $("#button-generator-div #button-result").css("font-size", $(this)[0].value + "px");
                break;
            case "background-color-property":
                $("#button-generator-div #button-result").css("background-color", $(this)[0].value);
                break;
            case "font-color-property":
                $("#button-generator-div #button-result").css("color", $(this)[0].value);
                break;
            case "horizontal-shadow-property":
                $("#button-generator-div #button-result").css("box-shadow", $(this)[0].value + "px " + $("#button-generator-div #vertical-shadow-property")[0].value + "px " + $("#button-generator-div #blur-shadow-property")[0].value + "px " + $("#button-generator-div #color-shadow-property")[0].value);
                break;
            case "vertical-shadow-property":
                $("#button-result").css("box-shadow", $("#button-generator-div #horizontal-shadow-property")[0].value + "px " + $(this)[0].value + "px " + $("#button-generator-div #blur-shadow-property")[0].value + "px " + $("#button-generator-div #color-shadow-property")[0].value);
                break;
            case "blur-shadow-property":
                $("#button-result").css("box-shadow", $("#button-generator-div #horizontal-shadow-property")[0].value + "px " + $("#button-generator-div #vertical-shadow-property")[0].value + "px " + $(this)[0].value + "px " + $("#button-generator-div #color-shadow-property")[0].value);
                break;
            case "color-shadow-property":
                $("#button-result").css("box-shadow", $("#button-generator-div #horizontal-shadow-property")[0].value + "px " + $("#button-generator-div #vertical-shadow-property")[0].value + "px " + $("#button-generator-div #blur-shadow-property")[0].value + "px " + $(this)[0].value);
                break;
            case "border-radius-property":
                $("#button-generator-div #button-result").css("border-radius", $(this)[0].value + "px");
                break;
            case "border-size-property":
                $("#button-generator-div #button-result").css("border", $(this)[0].value + "px solid " + $("#button-generator-div #border-color-property")[0].value);
                break;
            case "border-color-property":
                $("#button-generator-div #button-result").css("border", $("#button-generator-div #border-size-property")[0].value + "px solid " + $(this)[0].value);
                break;
            case "padding-property":
                $("#button-generator-div #button-result").css("padding", $(this)[0].value + "px");
                break;
        }
        var text_css_code = "font-size:" + $("#button-generator-div #font-size-property")[0].value + "px";
        text_css_code += "\n";
        text_css_code += "border-radius:" + $("#button-generator-div #border-radius-property")[0].value + "px";
        text_css_code += "\n";
        text_css_code += "backgorund-color:" + $("#button-generator-div #background-color-property")[0].value;
        text_css_code += "\n";
        text_css_code += "color:" + $("#button-generator-div #font-color-property")[0].value;
        text_css_code += "\n";
        text_css_code += "border:" + $("#button-generator-div #border-size-property")[0].value + "px solid " + $("#button-generator-div #border-color-property")[0].value;
        text_css_code += "\n";
        text_css_code += "box-shadow:" + $("#button-generator-div #horizontal-shadow-property")[0].value + "px " + $("#button-generator-div #vertical-shadow-property")[0].value + "px " + $("#button-generator-div #blur-shadow-property")[0].value + "px " + $("#button-generator-div #color-shadow-property")[0].value;
        text_css_code += "\n";
        text_css_code += "padding:" + $("#button-generator-div #padding-property")[0].value + "px";
        $("#button-generator-div .css-code").text(text_css_code);
    });
    $("#menu-generator-div .lessVariable").change(function() {
        switch (this.id) {
            case "border-menu-size-property":
                $("#menu-generator-div #menu-result > li").css("border", $(this)[0].value + "px solid " + $("#menu-generator-div #border-menu-color-property")[0].value);
                break;
            case "border-menu-color-property":
                $("#menu-generator-div #menu-result > li").css("border", $("#menu-generator-div #border-menu-size-property")[0].value + "px solid " + $(this)[0].value);
                break;
            case "border-radius-menu-property":
                $("#menu-generator-div #menu-result > li").css("border-radius", $("#menu-generator-div #border-radius-menu-property")[0].value + "px");
                break;
            case "font-size-menu-property":
                $("#menu-generator-div #menu-result > li").css("font-size", $("#menu-generator-div #font-size-menu-property")[0].value + "px");
                break;
            case "background-color-menu-property":
                $("#menu-generator-div #menu-result > li").css("background-color", $(this)[0].value);
                break;
            case "font-color-menu-property":
                $("#menu-generator-div #menu-result > li").css("color", $(this)[0].value);
                break;

        }
    });
});

