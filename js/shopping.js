//var invoice = {'invoice_items':[]};
//var domain = 'https://api.scifabric.com/';
var domain = 'http://localhost:5000';
var productData = {};
//
//var returningClient = false;
//
//if (getCookie('client') !== '') {
//    returningClient = true;
//}
//
//$("#payNewCreditCard").off('click').on('click', function(evt){
//    setCookie("client", true, 365);
//});
//
$(".btn-shoppingcart").off('click').on('click', function(evt){
    evt.preventDefault();
    console.log($(this).data());
    productData = $(this).data();
    selectedProduct.$data = Object.assign({}, selectedProduct.$data, productData);
    //var tmp = $(this).data();
    //invoice['invoice_items'].push(tmp);
    //// Add the admin fee
    //invoice['invoice_items'].push({'qty': 1, 'cost': Math.round(1.5/100*tmp['cost']), 'notes': 'Transaction fee'});
    $("#newclient").modal("show");
    //var text = "Buy " + tmp['notes'] + " for " + tmp['cost'] + "€";
    //$(".product").text(text);
    //$("#notes").text(tmp['notes']);
});
//
//
//
//$("#checkout").off('click').on('click', function(evt){
//    evt.preventDefault();
//    createClient();
//});
//
//$("#paySameCreditCard").off('click').on('click', function(evt){
//    $(".rolling").show();
//    $("#paySameCreditCard").prop("disabled", true);
//});
//
//
function createClient() {
    $.ajax({
        url: domain + "/newclient",
        crossDomain: true,
        xhrFields: { withCredentials: true }
    }).done(function(data) {
        //$("#csrf_token").attr("value", data['csrf_token']);
        client.csrftoken = data['csrftoken'];

        //var form = $("#formNewClient").serialize();
        var form = client.$data;
        delete form['countries'];

        var csrftoken = data['csrf_token'];
        
        var xhr = $.ajax({
          type: "POST",
          url: domain + "/newclient",
          data: form,
          dataType: "json",
          crossDomain: true,
          headers: {'X-CSRFToken': data['csrf_token']},
          xhrFields: { withCredentials: true }
        }).done(
            function(data){
                console.log("Client created!");
            }
            //createInvoice

            );

    });
}
//
//function createInvoice(client) {
//
//    if (client['data'] != undefined) {
//        $("#checkout").prop("disabled", true);
//        $(".product").text("Checking out...");
//        $(".rolling").show();
//
//        $.ajax({
//            url: domain + "/newinvoice",
//            crossDomain: true,
//            contentType:"application/json; charset=utf-8",
//            xhrFields: { withCredentials: true }
//        }).done(function(data) {
//
//            invoice['csrf_token'] = data['csrf_token'];
//            invoice['client_id'] = client.data['id'];
//            invoice['email_invoice'] = true;
//            invoice['cost']  = invoice['invoice_items'][0]['cost'];
//            invoice['qty']  = invoice['invoice_items'][0]['qty'];
//
//            var xhr = $.ajax({
//              type: "POST",
//              url: domain + "/newinvoice",
//              data: JSON.stringify(invoice),
//              contentType: "application/json",
//              dataType: "json",
//              crossDomain: true,
//              headers: {'X-CSRFToken': data['csrf_token']},
//              xhrFields: { withCredentials: true }
//            }).done(function(datapost){ 
//                if ('recurring' in invoice) {
//                    $("#formNewClient").hide();
//                    $("#checkout").hide();
//
//                    var text = invoice['notes'] + " for " + invoice['cost'] + "€ " + invoice['recurring'];
//                    $(".product").text(text);
//                    $(".product").css("font-weight", "bold");
//                    $("#subscription").show();
//                    $("#subscriptionBtn").show();
//                }
//                else {
//                    var invitation = datapost['data']['invitations'][0];
//                    var paymentSameCreditCardURL = "https://scifabric.invoiceninja.com/payment/" + invitation['key'] + "/token";
//                    var paymentNewCreditCardURL = "https://scifabric.invoiceninja.com/payment/" + invitation['key'] + "/credit_card";
//                    console.log("daniel");
//                    console.log(invoice);
//                    var total = 0;
//                    for(i=0;i<invoice['invoice_items'].length;i++){
//                        var tr = $("<tr/>");
//                        var text = invoice['invoice_items'][i]['notes']; + " for " + invoice['invoice_items'][i]['cost'] + "€";
//                        var product = $("<th/>");
//                        product.text(text);
//                        product.addClass("text-left");
//                        var qty = $("<td/>");
//                        qty.text(invoice['invoice_items'][i]['qty']);
//                        qty.addClass("text-right");
//                        var tax = $("<td/>");
//                        tax.text("0");
//                        tax.addClass("text-right");
//                        var cost = $("<td/>");
//                        cost.text(invoice['invoice_items'][i]['cost'] + "€");
//                        cost.addClass("text-right");
//                        total += invoice['invoice_items'][i]['cost'];
//                        tr.append(product);
//                        tr.append(qty);
//                        tr.append(tax);
//                        tr.append(cost);
//                        $(".invoice_items").append(tr);
//                    }
//
//                    var tr = $("<tr/>");
//                    var product = $("<th/>");
//                    product.text("Total");
//                    product.addClass("text-left");
//                    var qty = $("<td/>");
//                    qty.text();
//                    qty.addClass("text-right");
//                    var tax = $("<td/>");
//                    tax.text("0");
//                    tax.addClass("text-right");
//                    var cost = $("<td/>");
//                    cost.text(total + "€");
//                    cost.addClass("text-right");
//                    tr.append(product);
//                    tr.append(qty);
//                    tr.append(tax);
//                    tr.append(cost);
//                    $(".invoice_items").append(tr);
//
//                    $("#paySameCreditCard").attr("href", paymentSameCreditCardURL);
//                    $("#payNewCreditCard").attr("href", paymentNewCreditCardURL);
//                    $("#formNewClient").hide();
//                    $("#checkout").hide();
//                    $(".rolling").hide();
//                    $("#summaryCheckout").show();
//
//                    if (returningClient) {
//                        $("#paySameCreditCard").show();
//                        $("#payNewCreditCard").show();
//                    }
//
//                    else {
//                        $("#payNewCreditCard").text("Pay");
//                        $("#payNewCreditCard").addClass("btn btn-default");
//                        $("#payNewCreditCard").parent().removeClass("top20");
//                        $("#payNewCreditCard").show();
//                    }
//                    //window.location.replace(invitation.link);
//                }
//            });
//        });
//    }
//    else {
//        $("div").removeClass("has-error");
//        $(".help-block").remove(".help-block");
//        $.each(client, function(key, value){
//            var help = $("<span/>");
//            help.addClass("help-block");
//            help.text(value[0]);
//            $("#" + key).parent().addClass("has-error");
//            $("#" + key).parent().append(help);
//        });
//        var help = $("<span/>");
//        help.addClass("help-block");
//        help.html("&nbsp;");
//        $("#address2").parent().append(help);
//
//    }
//}
//
//
// Fetch countries and its IDs to populate the modal





//$("#newclient").modal("show");


// NEW VUE CODE
//
//
var selectedProduct = new Vue({
    el: '#checkout',
    data: productData
});

var client = new Vue({
    el: '#newclient',
    data: {
        csrftoken: '',
        name: '',
        vat: '',
        first_name: '',
        last_name: '',
        address1: '',
        address2: '',
        city: '',
        state: '', 
        postal_code: '',
        country: '',
        countries: '',
        email: ''
    },
    methods: {
        checkout: function(event){ 
            console.log("HOLA");
            createClient();}
    }

});

$.ajax({
    url: domain + "/countries",
    crossDomain: true,
    xhrFields: { withCredentials: true }
}).done(function(countries) {
    client.countries = countries;
});

