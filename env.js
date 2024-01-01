document.addEventListener('DOMContentLoaded', function() {
    // This function runs when the document is ready

    var container = document.querySelector('.container');
    var card = document.querySelector('.card');

    container.addEventListener('mouseenter', function() {
        //  when the mouse enters the .container element

        card.style.transition = 'top 0.5s';
        card.style.top = '-90px';
    });

    container.addEventListener('mouseleave', function() {
        // This function runs when the mouse leaves the .container element

        card.style.transition = 'top 0.5s';
        card.style.top = '0';
    });


});