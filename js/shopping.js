var invoice;
var domain = 'https://api.scifabric.com/';
//var domain = 'http://localhost:5000';

var returningClient = false;

if (getCookie('client') !== '') {
    returningClient = true;
}

$("#payNewCreditCard").off('click').on('click', function(evt){
    setCookie("client", true, 365);
});

$(".btn-shoppingcart").off('click').on('click', function(evt){
    evt.preventDefault();
    invoice = $(this).data();
    $("#newclient").modal("show");
    var text = "Buy " + invoice['notes'] + " for " + invoice['cost'] + "€";
    $(".product").text(text);
    $("#notes").text(invoice['notes']);
});



$("#checkout").off('click').on('click', function(evt){
    evt.preventDefault();
    createClient();
});


function createClient() {
    $.ajax({
        url: domain + "/newclient",
        crossDomain: true,
        xhrFields: { withCredentials: true }
    }).done(function(data) {
        $("#csrf_token").attr("value", data['csrf_token']);

        var form = $("#formNewClient").serialize();

        var csrftoken = data['csrf_token'];
        
        var xhr = $.ajax({
          type: "POST",
          url: domain + "/newclient",
          data: form,
          dataType: "json",
          crossDomain: true,
          xhrFields: { withCredentials: true }
        }).done(createInvoice);

    });
}

function createInvoice(client) {

    if (client['data'] != undefined) {
        $(".rolling").show();
        $("#checkout").prop("disabled", true);
        $(".product").text("Checking out...");

        $.ajax({
            url: domain + "/newinvoice",
            crossDomain: true,
            xhrFields: { withCredentials: true }
        }).done(function(data) {

            console.log(client);
            invoice['csrf_token'] = data['csrf_token'];
            invoice['client_id'] = client.data['id'];
            console.log(invoice);

            var xhr = $.ajax({
              type: "POST",
              url: domain + "/newinvoice",
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
                    var paymentSameCreditCardURL = "https://scifabric.invoiceninja.com/payment/" + invitation['key'] + "/token";
                    var paymentNewCreditCardURL = "https://scifabric.invoiceninja.com/payment/" + invitation['key'] + "/credit_card";
                    var text = invoice['notes']; + " for " + invoice['cost'] + "€";
                    $(".product").text(text);
                    $(".cost").text(invoice['cost'] + "€");
                    $(".qty").text(invoice['qty']);
                    $(".total").text(invoice['cost'] + "€");
                    $("#paySameCreditCard").attr("href", paymentSameCreditCardURL);
                    $("#payNewCreditCard").attr("href", paymentNewCreditCardURL);
                    $("#formNewClient").hide();
                    $("#checkout").hide();
                    $("#summaryCheckout").show();

                    if (returningClient) {
                        $("#paySameCreditCard").show();
                        $("#payNewCreditCard").show();
                    }

                    else {
                        $("#payNewCreditCard").text("Pay");
                        $("#payNewCreditCard").addClass("btn btn-default");
                        $("#payNewCreditCard").parent().removeClass("top20");
                        $("#payNewCreditCard").show();
                    }
                    //window.location.replace(invitation.link);
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
    url: domain + "/countries",
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

