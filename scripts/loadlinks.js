function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data/concepts.json', true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

function insertRow(details) {
    let rs = "<tr>";
    let sno = "<td>" + details["sno"] + "</td>";
    let tno = "<td>" + details["unit"] + "</td>";
    let ctitle = "<td>" + details["concept"] + "</td>";
    let link = "<td> <a href='" + details["link"] + "'class='ui small green basic button flashit'>Download file</a> </td>";
    let re = "</tr>";
    $("#tablearea").append(rs,sno,tno, ctitle, link, re);
}
function insertaddRow(details) {
    let rs = "<tr>";
    //let sno = "<td>" + details["sno"] + "</td>";
    //let tno = "<td>" + details["unit"] + "</td>";
    let ctitle = "<td>" + details["concept"] + "</td>";
    let link = "<td> <a href='" + details["link"] + "'class='ui small green basic button flashit'>Download</a> </td>";
    let re = "</tr>";
    $("#addtable").append(rs, ctitle, link, re);
}
$(document).ready(function () {
    $("#loading")[0].style.visibility = "visible";
    loadJSON(function(response) {
        // Parse JSON string into object
            var data = JSON.parse(response);
            //alert(data["concepts"][0]["concept"]);
            var concepts = data["concepts"];
            //Creating rows in table
            concepts.forEach(element => {
                insertRow(element);            
            });

            //loading additional resources
            var additional = data["additional"];
            additional.forEach(element => {
                insertaddRow(element);
            });
       });       
       $("#loading")[0].style.visibility = "hidden";
});
