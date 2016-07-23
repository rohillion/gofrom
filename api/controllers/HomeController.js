/**
 * HomeController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

var HomeController = {

    index: function (req,res)
    {
        var session = this.createSkyScannerSession(req);
        console.log(session)
        res.view();
    },

    createSkyScannerSession: function(req)
    {

      console.log('createSkyScannerSession');

      var webservice_data = "";

      var http = require('http'), options = {
        host : "partners.api.skyscanner.net",
        path : '/apiservices/pricing/v1.0',
        method : 'POST'
      };

      http.get(options, function(webservice_response)
      {
        console.log(webservice_response);
        webservice_response.on('error', function(e){ console.log(e.message); });
        webservice_response.on('data', function(chunk){ webservice_data += chunk;});
        webservice_response.on('end', function(){return webservice_data;});
        console.log('coucou');
      });
    }

};
module.exports = HomeController;
