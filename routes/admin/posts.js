const expresss = require('express');
const router = expresss.Router();

router.all('/*',(req,res,next)=>{
    req.app.locals.layout = 'admin';
    next();
});
router.get('/',(req,res)=>{
    res.send('It Workds')
});

module.exports = router;