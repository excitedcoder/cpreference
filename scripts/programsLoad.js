$(document).ready( () => {
    document.getElementById('dataTable').style.visibility = "hidden";
});
var ref = firebase.database().ref().child("programs");

ref.on("child_added", data => {
    var tbody = $("#tableBody");
    programs = data.val();
    var x = 1;

    programs.forEach(element => {
        var tr = $('<tr></tr>');
        tr.append("<td>" + x + "</td>");
        tr.append("<td>" + data.key + "</td>");
        tr.append("<td>" + element["Title"] + "</td>");        
        tr.append("<td> <a href='" + element["Link"] + "' class='ui compact primary button' target='_blank'>See Execution</a></td>");

        tbody.append(tr);
        x++;

    });
  
    document.getElementById('loader').innerText = "Available List of Programs:";
    document.getElementById('dataTable').style.visibility = "visible";
    
});
