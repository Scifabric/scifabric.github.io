$("#credits-handler").off('click').on('click', function(event){
    event.preventDefault();
    $(".credits").toggleClass("show-credits");
});
