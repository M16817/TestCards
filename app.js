
'use strict';
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




   app.post('/',function(req,res){
      console.log('Received the request & it is:::'+JSON.stringify(req.body));
      if(req.body.result.action=='input.personaldetails'){
    
      var resagent='Your Ticket has been booked';
      console.log('request are'+resagent);
      return res.json({
        speech:resagent,
        displayText: resagent,
        source:'Flight Booking'
      });



}else if (req.body.result.action=='DebitCard'){

  var resagent='Your Debit card request has been placed';
  console.log('request are'+resagent);
  return res.json({
    speech:resagent,
    displayText: resagent,
    source:'Test Cards'
  });

}
else{
  return res.json({
    speech:'HEY Sorry, cannot determine',
    displayText:'HEY Sorry, we cant get you'
  })
}

});



app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});
