$(document).ready( () => {
    document.getElementById('dataTable').style.visibility = "hidden";
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBs5aJA-ytz8k6ych2oBRNbFcbCowxxpac",
    authDomain: "cpreference-46d14.firebaseapp.com",
    databaseURL: "https://cpreference-46d14.firebaseio.com",
    projectId: "cpreference-46d14",
    storageBucket: "cpreference-46d14.appspot.com",
    messagingSenderId: "309468014422"
};
firebase.initializeApp(config);

var ref = firebase.database().ref().child("programs");
var x = 1;
ref.on("child_added", data => {
    var tbody = $("#tableBody");
    programs = data.val();
    

    programs.forEach(element => {
        var tr = $('<tr></tr>');
        tr.append("<td>" + x + "</td>");
        tr.append("<td>" + data.key + "</td>");
        tr.append("<td>" + element["Title"] + "</td>");        
        tr.append("<td> <a href='" + element["Link"] + "' class='btn btn-primary btn-sm' target='_blank'>See Execution</a></td>");

        tbody.append(tr);
        x++;

    });
  
    document.getElementById('loader').innerText = "Available List of Programs:";
    document.getElementById('dataTable').style.visibility = "visible";
    
});
