/* export class User {
    constructor(name, mail) {
        this.name = name;
        this.mail = mail;
    }

    console.log(req.body);

    let Users = db.getInstance().collection('users')

    Users.insertOne(req.body, (err, response) => {
        if (err) {
            console.log(err);
        }
        let name = response.ops[0].name
        let email = response.ops[0].email
        res.send('Successfully inserted ' + name + ' ' + email)

    })
} */
const db = require('../models/db');

exports.User = () =>  db.getInstance().collection('users');