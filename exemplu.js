const expr = require("express");
const router = expr.Router();

router.get("/", (req, res) => {
    
    res.send("This is an example endpoint!");
})

module.exports = router;