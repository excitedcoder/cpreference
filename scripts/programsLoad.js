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
        tr.append("<td>" + element["Link"] + "</td>");

        tbody.append(tr);
        x++;

    });
    


    
    console.log(data.key);
    console.log(data.val()[0]);
    
});
