<script>
function accept_cookies(){
    /* This function sets the cookie when the user clicks on the message. */
    var expire=new Date();
    expire=new Date(expire.getTime()+7776000000);
    document.cookie = "cookies_scifabric=True; expires=" + expire + "; path=/";
    $("#cookiebox").hide();
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
 
$(function() {
        if (getCookie('cookies_scifabric') == 'True') {
            $("#cookiebox").hide();
        }
});
 
</script>

