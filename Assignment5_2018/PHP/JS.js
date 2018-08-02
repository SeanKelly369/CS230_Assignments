
$(document).ready(function(){
    $("#tablediv").hide();

    $("form input[type=submit]").click(function() {
        $("input[type=submit]", $(this).parents("form")).removeAttr("clicked");
        $(this).attr("clicked", "true");
    });

    $(document).off("submit");
    $(document).on("submit", "#create", function(event){
        event.preventDefault();
        let t = {
            "name": $("form#create input[name=name]").val(),
            "url": $("form#create input[name=url]").val(),
            "theDesc": $("form#create input[name=theDesc]").val()
        };
        let json_data = JSON.stringify(t);
        $.post("rest_api.php", json_data,
            function(remoteData){
                alert(remoteData)
            });
    });

    $(document).on("submit", "#retrieve", function(event){
        event.preventDefault();
        let t;
        if($("form#retrieve input[name=submit][clicked=true]").val() === "Retrieve Name"){
            t = {"name" : $("form#retrieve input[name=retrieveName]").val()};
        }

        else
            t = {"id" : $("form#retrieve input[name=id]").val()};

        $.get("rest_api.php/?params="+encodeURIComponent(JSON.stringify(t)),
            function(remoteData){
                let tableArray = JSON.parse(remoteData);
                let addRow = "";
                for(i = 0; i < tableArray.length; i++){
                    addRow +=
                        "<tr>" +
                            "<td>"+ tableArray[i].id +"</td>"+
                            "<td>"+ tableArray[i].name +"</td>"+
                            "<td>"+ tableArray[i].url +"</td>"+
                            "<td>"+ tableArray[i].theDesc +"</td>"+
                            "<td>"+ tableArray[i].theDate +"</td>"+

                        "</tr>";
                }
                $("table tbody").append(addRow).slideDown(2000);
                $("#tablediv").slideDown(2000);
            });
    });

    $(document).on("submit", "#update", function(event){
        event.preventDefault();
        if($("form#update input[name=id]").val() === ""){
        }
        let t = {"id" : $("form#update input[name=id]").val()}

        if($("form#update input[name=name]").val() !== "") {
            t["name"] = $("form#update input[name=name]").val();
        }
        if($("form#update input[name=url]").val() !== "") {
            t["url"] = $("form#update input[name=url]").val();
        }
        if($("form#update input[name=theDesc]").val() !== "") {
            t["theDesc"] = $("form#update input[name=theDesc]").val();
        }

        let json_data = JSON.stringify(t);

        $.ajax({
            url: 'rest_api.php',
            type: 'PUT',
            data: json_data,
            success: function(remoteData) {
                console.log("PUT update to " + remoteData + "is working");

            }
        });
        console.log(t);
    });

    $(document).on("submit", "#delete", function(event){
        event.preventDefault();
        let t = {"id" : $("form#delete input[name=id]").val()}
        let json_data = JSON.stringify(t);

        $.ajax({
            url: 'rest_api.php',
            type: 'DELETE',
            data: json_data,
            success: function(remoteData) {
                console.log("Data if id " + remoteData + " removed from database");
            }
        });
    });
});
