const client = require('../index.js')

module.exports = {
	findClimber: function (callback) {
		// client.query(`SELECT * FROM Users WHERE name_first=${first} AND name_last=${last} AND login=${login}`, callback)
		client.query(`SELECT * FROM Users`, callback)
	},
	findUserClimbs: function (user,callback) {
	  client.query('SELECT * FROM Climb INNER JOIN Attempts ON Attempts.id_Users   ', callback)
	},
	findLatestUserAttempts: function (user,callback) {
	  client.query('SELECT * FROM Attempts', callback)
	},
	findUserMonthOfClimbs: function (user,callback) {
	  client.query('SELECT * FROM employees', callback)
	},
	findClimbsByGrade: function (grade,callback) {
	  client.query('SELECT * FROM employees', callback)
	},
	findTopClimbs: function (user,callback) {
	  client.query('SELECT * FROM employees', callback)
	},
	insertNewClimb: function (user,callback) {
	  client.query('SELECT * FROM employees', callback)
	},
	insertNewUser: function (first, last, login, callback) {
	  client.query(`INSERT INTO Users (name_first,name_last,login) VALUES (${first},${last},${login})`, callback)
	},
	insertNewAttempt: function (user,callback) {
	  client.query('SELECT * FROM employees', callback)
	},
}


