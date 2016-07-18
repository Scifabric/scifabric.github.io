var invoice;

$(".btn-shoppingcart").off('click').on('click', function(evt){
    evt.preventDefault();
    invoice = $(this).data();
    $("#newclient").modal("show");
    var text = "Buy " + invoice['notes'] + " for " + invoice['cost'] + "€";
    $(".product").text(text);
    $("#notes").text(invoice['notes']);
});



$("#checkout").off('click').on('click', function(evt){
    $(".rolling").show();
    $(this).prop("disabled", true);
    $(".product").text("Checking out...");
    evt.preventDefault();
    createClient();
});


function createClient() {
    $.ajax({
        url: "https://api.scifabric.com/newclient",
        crossDomain: true,
        xhrFields: { withCredentials: true }
    }).done(function(data) {
        $("#csrf_token").attr("value", data['csrf_token']);

        var form = $("#formNewClient").serialize();

        var csrftoken = data['csrf_token'];
        
        var xhr = $.ajax({
          type: "POST",
          url: "https://api.scifabric.com/newclient",
          data: form,
          dataType: "json",
          crossDomain: true,
          xhrFields: { withCredentials: true }
        }).done(createInvoice);

    });
}

function createInvoice(client) {

    if (client['data'] != undefined) {
        $.ajax({
            url: "https://api.scifabric.com/newinvoice",
            crossDomain: true,
            xhrFields: { withCredentials: true }
        }).done(function(data) {

            console.log(client);
            invoice['csrf_token'] = data['csrf_token'];
            invoice['client_id'] = client.data['id'];
            console.log(invoice);

            var xhr = $.ajax({
              type: "POST",
              url: "https://api.scifabric.com/newinvoice",
              data: invoice,
              dataType: "json",
              crossDomain: true,
              xhrFields: { withCredentials: true }
            }).done(function(datapost){ 
                console.log("Invoice created!"); 
                console.log(datapost);
                console.log(invoice);
                if ('recurring' in invoice) {
                    $("#formNewClient").hide();
                    $("#checkout").hide();

                    var text = invoice['notes'] + " for " + invoice['cost'] + "€ " + invoice['recurring'];
                    $(".product").text(text);
                    $(".product").css("font-weight", "bold");
                    $("#subscription").show();
                    $("#subscriptionBtn").show();
                }
                else {
                    var invitation = datapost['data']['invitations'][0];
                    window.location.replace(invitation.link);
                }
            });
        });
    }
    else {
        $("div").removeClass("has-error");
        $(".help-block").remove(".help-block");
        console.log("Error");
        console.log(client);
        $.each(client, function(key, value){
            var help = $("<span/>");
            help.addClass("help-block");
            help.text(value[0]);
            $("#" + key).parent().addClass("has-error");
            $("#" + key).parent().append(help);
            console.log(key);
            console.log(value);
        });
        var help = $("<span/>");
        help.addClass("help-block");
        help.html("&nbsp;");
        $("#address2").parent().append(help);

    }
}


// Fetch countries and its IDs to populate the modal
$.ajax({
    url: "https://api.scifabric.com/countries",
    crossDomain: true,
    xhrFields: { withCredentials: true }
}).done(function(countries) {
    for (i=0; i<countries.length; i++) {
        var option = $("<option/>");
        option.attr("value", countries[i]['id']);
        option.text(countries[i]['name']);
        $("#country").append(option);
    }
});

