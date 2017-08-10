// Counter code
var button = document.getElementById('counter');


button.onclick = function() {
    
    //Create a request to a counter endpoint
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
      if (request,readyState === XMLHttpRequest.DONE){
          // Take some acction
          if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      //Not done yet
    };
    //Maje the request
    request.open('GET','http://dabhishekji.imad.hasura-app.io/counter', true);
    request.send(null);
};