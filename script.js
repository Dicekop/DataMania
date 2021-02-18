$(function(){
    $('.first-month').hover(
        function(){
            $('.first-month').animate({'background-color':'#008DD5'}, {duration:'4000', queue: false}).animate({'color':'white'}, {duration:'0', queue: false});
        },
        function(){
            $('.first-month').animate({'background-color':'white'}, {duration:'4000', queue: false}).animate({'color':'#008DD5'}, {duration:'4000', queue: false});
        }
    );
    
    $('.nav-right').hover(
        function(){
            $('.nav-right').fadeTo('4000',0.7);
        },
        function(){
            $('.nav-right').fadeTo('4000',1.0);
        }
    );

    $('.detail a').hover(
        function(){
            $('.detail a').animate({'background-color':'#008DD5'}, {duration:'4000', queue: false}).animate({'color':'white'}, {duration:'0', queue: false});
        },
        function(){ 
            $('.detail a').animate({'background-color':'white'}, {duration:'4000', queue: false}).animate({'color':'#008DD5'}, {duration:'4000', queue: false});
        }
    );

    $('.send a').hover(
        function(){
            $('.send a').animate({'background-color':'#3B3B3B'}, {duration:'4000', queue: false}).animate({'color':'white'}, {duration:'0', queue: false});
        },
        function(){
            $('.send a').animate({'background-color':'white'}, {duration:'4000', queue: false}).animate({'color':'#3B3B3B'}, {duration:'0', queue: false});
        }
    );
});
