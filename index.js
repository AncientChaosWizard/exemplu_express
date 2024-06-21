
const expr = require("express");
const app = expr(); //this uses the variable not the full name
const bodyParser = require("body-parser");

const router = require("./routes");

app.use(router);
app.listen(3002, () => {
    console.log("Listening on port ", 3002);
});

app.get("/", (req, res) => {
    
    res.send(
        "This is an express API"
    );
}); 
