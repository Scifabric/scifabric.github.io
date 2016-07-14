$("#newclient").modal("show");



$("#checkout").off('click').on('click', function(evt){
    evt.preventDefault();

    $.ajax({
        url: "http://localhost:5000/shopping",
        crossDomain: true,
        xhrFields: { withCredentials: true }
    }).done(function(data) {
        console.log(data); 
        $("#csrf_token").attr("value", data['csrf_token']);

        var form = $("#formNewClient").serialize();
        console.log("HOLA FORM");
        console.log(form);


        var csrftoken = data['csrf_token'];

        
        var xhr = $.ajax({
          type: "POST",
          url: "http://localhost:5000/shopping",
          data: form,
          dataType: "json",
          crossDomain: true,
          xhrFields: { withCredentials: true }
        }).done(function(datapost){ console.log(datapost);});

    });
});
