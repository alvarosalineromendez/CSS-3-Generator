/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
   $(".option-menu").click(function() {
        $("#title-menu").text(this.firstChild.data);
    });
    $("#back-button").click(function() {
        $("#title-menu").text("Choose operation");
    });
    
});

