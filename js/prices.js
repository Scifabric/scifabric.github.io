var price_list = [250, 1700, 2200];
$(".money").each(function(index){
    $(this).text(price_list[index].toLocaleString());
});

$("#toogleyear").change(function() {
    if(this.checked) {
        $(".money").each(function(index){
            var total = price_list[index]*12;
            var tmp = total - price_list[index];
            $(this).text(tmp.toLocaleString());
        });

        $(".per").each(function(index){
            $(this).text("year");
        });

        $(".save").each(function(index){
            $(this).html("<strong>You save " + price_list[index].toLocaleString() + "€</strong>");
        });

    }
    else {
        $(".money").each(function(index){
            var tmp = price_list[index];
            $(this).text(tmp.toLocaleString());
        });

        $(".save").each(function(index){
            $(this).html("<br/>");
        });


        $(".per").each(function(index){
            $(this).text("month");
        });

    }
});
