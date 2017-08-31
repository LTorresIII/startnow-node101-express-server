$(document).ready(function() {
        /* JSON is retreaving data from a file */
    $.getJSON("data.json",function(data){

        var topSpots = data; 

        for (i = 0; i < topSpots.length; i++){
            /* Create a <tr></tr> here and append <td></td>'s below, using jquery */
            var tRow = $("<tr>"+"</tr>");
            tRow.append("<td>" + topSpots[i].name  + "</td>");
            tRow.append("<td>" + topSpots[i].description  + "</td>");
            tRow.append("<td>" + '<a href="https://www.google.com/maps?q='+topSpots[i].location+'">'+"Map</a>" + "</td>");
            $("tbody").append(tRow);
            
        };
    });
});