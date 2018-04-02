const dbHelpers = require('../../db/models/helpers.js')


module.exports = {
  login: {
    get: function (req,res) {
      dbHelpers.findClimber(function (err, results){
       if (err) {
         console.error(err)
       } else {
         res.send(results)
       }	
      })
    },
    post: function (req,res) {
    	console.log(req)
    	dbHelpers.insertNewUser(req.body.firstName,req.body.lastName,req.body.login, function (err, results){
       if (err) {
         console.error(err)
       } else {
         console.log('posted')
       }	
      })
    }	
  },
  feed: {
    get: function (req,res) {
      dbHelpers.findLatestUserAttempts(function (err, results){
       if (err) {
         console.error(err)
       } else {
         res.send(results)
       }	
      })
    },
    post: function (req,res) {
    	console.log(req)
    	dbHelpers.insertNewUser(req.body.firstName,req.body.lastName,req.body.login, function (err, results){
       if (err) {
         console.error(err)
       } else {
         console.log('posted')
       }	
      })
    }	
  }
}