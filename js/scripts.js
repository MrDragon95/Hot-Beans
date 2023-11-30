function navigationFunction() {
  var x = document.getElementById("navigation");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}

function contactFunction() {
    $.ajax({
        url:"https://api.apispreadsheets.com/data/dvieEwx9QzqlLyNB/",
        type:"post",
        data:$("#contactUS").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}

function applyFunction() {
    $.ajax({
        url:"https://api.apispreadsheets.com/data/NbDHTpX0Y8pWsNHy/",
        type:"post",
        data:$("#applyNow").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}