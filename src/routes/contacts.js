  
const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Contacts
router.get('/api/contact', (req, res) => {
  mysqlConnection.query('SELECT * FROM contact', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});


// DELETE CONTACTS
router.delete('/api/contact/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM contact WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({message: 'Contact Deleted'});
    } else {
      console.log(err);
    }
  });
});

// Create Contact
router.post('/api/contact', (req, res) => {

    // const query = "INSERT INTO contact(name,lastname)VALUES('Alexander','Labrador')"

  const query = "INSERT INTO contact(name,lastname,description,email,number_phone,home_phone)VALUES('" + req.body.name + "', '" + req.body.lastname + "', '" + req.body.description + "', '" + req.body.email + "', '" + req.body.number_phone + "', '" + req.body.home_phone + "')"
    
  mysqlConnection.query(query,(err, rows, fields) => {
    if(!err) {
      res.json({message: 'Contact Saved'});
    } else {
        res.json({message: err});
    }
  });

});


// Update Contact

router.put('/api/contact/:id', (req, res) => {
  mysqlConnection.query('UPDATE `contact` SET `name`=?,`lastname`=?,`description`=?,`email`=?,`number_phone`=?,`home_phone`=?  where `id`=?', [req.body.name,req.body.lastname, req.body.description, req.body.email, req.body.number_phone, req.body.home_phone, req.params.id], (err, rows, fields) => {
    if(!err) {
      res.json({message: 'Contact Updated'});
    } else {
        res.json({message: err});
    }
  });
});

module.exports = router;