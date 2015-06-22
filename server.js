
   'use_strict';
    var requestify = require('requestify');

    exports.printMsg = function () {
        console.log("This is a message from the demo package");
    };


    exports.getRequest = function(url,options){
      if(url){
          requestify.get(url,options).then(function(response){
              console.log(response.getBody());
              return response.getBody();
          })
      }
   };
