const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/about', (req, res, next)=>{
  res.render('about')
})

router.get('/images', (req, res, next)=>{
  res.render('images')
})



module.exports = router;
