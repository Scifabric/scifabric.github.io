$(document).ready(function(){

    var url = "http://crowdsourced.micropasts.org/api/globalstats";
    
    $.ajax({
      dataType: "json",
      url: url,
      success: success
    });
    
    function success(data){
        var n_users = Math.floor(data['n_users']/100)*100;
        $("#engagedUsers").html(n_users.toLocaleString());

        var taskCompleted = Math.floor(data['n_task_runs']/100)*100;
        $("#taskCompleted").html(taskCompleted.toLocaleString());

        var n_projects = Math.floor(data['n_projects']/10)*10;
        $("#n_projects").html(n_projects.toLocaleString());
    }
});

