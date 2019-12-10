jsforce
-------

[![Build Status](https://travis-ci.org/tiveor/jsforce.svg?branch=master)](https://travis-ci.org/tiveor/jsforce)

Meteor package for jsforce node.js package providing a wrapper around Salesforce API.

Adding this package to your Meteor application adds jsforce object into the global scope.

Server side only.

Installation
------------
```
meteor add tiveor:jsforce
```

Quick Start
-----------

```javascript
  Meteor.startup(function(){

    const conn = new jsforce.Connection({ oauth2: { clientId: process.env.SFDC_CLIENT_ID, clientSecret: process.env.SFDC_CLIENT_SECRET }});
    conn.login(process.env.SFDC_USERNAME, process.env.SFDC_PASSWORD);
      if (err) {
        return console.error(err); 
      }      
      conn.query('SELECT Id, Name FROM Account', function(err, res) {
        if (err) {
          return console.error(err);
        }
        console.log(res);
      });    
  });
```

Documentation
-------------
Refer to the official [jsfore package](https://jsforce.github.io/) documentation.
