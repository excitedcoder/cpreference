$(document).ready(() => {
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

var ref = firebase.database().ref().child("PSC");
ref.on("child_added", data => {
    var tbody = $("#tableBody");
    program = data.val();
    //console.log(data.key + ':' + data.val()['AURL']);

    var tr = $('<tr></tr>');
    tr.append("<td>" + program["Eno"] + "</td>");
    tr.append("<td>" + program["Title"] + "</td>");
    tr.append("<td> <a href='" + program["AURL"] + "' class='btn btn-primary btn-sm' target='_blank'>See Algorithm</a></td>");
    tr.append("<td> <a href='" + program["FURL"] + "' class='btn btn-primary btn-sm' target='_blank'>See Flowchart</a></td>");
    tr.append("<td> <a href='" + program["PURL"] + "' class='btn btn-primary btn-sm' target='_blank'>See Program</a></td>");

    tbody.append(tr);
    
    document.getElementById('loader').innerText = "Available List of Programs:";
    document.getElementById('dataTable').style.visibility = "visible";
});
