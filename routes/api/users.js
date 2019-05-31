const express = require('express');
const router = express.Router();

const User = require('../../models/User')

// @route   POST api/post
// @desc    Submit a message
// @access  Public
router.post(
    '/',
    async (req, res) => {
        //const {name, email, password} = req.body;
        const name = req.body.name.toString();   
        const email = req.body.email.toLowerCase().toString();
        const phone = req.body.phone.toString();
        const message = req.body.message.toString();  
    
        try {
            //New User Instance
            let user = new User({ 
                name, 
                email, 
                phone,
                message
            });
    
            //Save user to DB
            await user.save();

            res.send({ user });

        } catch(err) {
            console.error(err.message)
            res.status(500).send('Server Error')
        }
          
    }
);

module.exports = router