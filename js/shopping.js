var invoice;

$(".btn-shoppingcart").off('click').on('click', function(evt){
    evt.preventDefault();
    invoice = $(this).data();
    $("#newclient").modal("show");
    var text = "Buy " + invoice['notes'] + " for " + invoice['cost'] + "€";
    $("#product").text(text);
    $("#notes").text(invoice['notes']);
});



$("#checkout").off('click').on('click', function(evt){
    evt.preventDefault();
    createClient();

});


function createClient() {
    $.ajax({
        url: "http://localhost:5000/newclient",
        crossDomain: true,
        xhrFields: { withCredentials: true }
    }).done(function(data) {
        $("#csrf_token").attr("value", data['csrf_token']);

        var form = $("#formNewClient").serialize();

        var csrftoken = data['csrf_token'];
        
        var xhr = $.ajax({
          type: "POST",
          url: "http://localhost:5000/newclient",
          data: form,
          dataType: "json",
          crossDomain: true,
          xhrFields: { withCredentials: true }
        }).done(createInvoice);

    });
}

function createInvoice(client) {
    $.ajax({
        url: "http://localhost:5000/newinvoice",
        crossDomain: true,
        xhrFields: { withCredentials: true }
    }).done(function(data) {

        console.log(client);
        invoice['csrf_token'] = data['csrf_token'];
        invoice['client_id'] = client.data['id'];
        console.log(invoice);

        var xhr = $.ajax({
          type: "POST",
          url: "http://localhost:5000/newinvoice",
          data: invoice,
          dataType: "json",
          crossDomain: true,
          xhrFields: { withCredentials: true }
        }).done(function(datapost){ console.log("Invoice created!"); console.log(datapost);});
    });
}
