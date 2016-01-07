/**
 * Created by Hinge on 1/6/16.
 */
$(document).ready(function(){
   $('button').on('click', function(event){
       $.ajax("/balance").then(function(response){
           $('.results').text(response);
       })
   })

});

