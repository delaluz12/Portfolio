$(document).ready(function(){
    $('.sidenav').sidenav();

    $('#workContainer').hide();
    $('#aboutmeCardMenu').hide();

    $('.workBtn').on('click',()=>{
        $('#aboutmeContainer').hide();
        
        $('#workContainer').show();
    });

    $('.aboutMeBtn').on('click',()=>{
        $('#workContainer').hide();
        $('#aboutmeCard').hide();
        $('#aboutmeContainer').show();
        $('#aboutmeCardMenu').show();
    })

  });