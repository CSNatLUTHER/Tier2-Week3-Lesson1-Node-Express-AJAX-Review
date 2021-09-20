// requires
let express = require ( 'express' );
let app = express();


// uses
    // server static files
    app.use( express.static( 'server/public' ) ); // base folder for files

// global variables
const port = 5000
let messages = [{
    author: 'Heather',
    text: 'I\'m testing the text'
}
];

// spin up server
app.listen( port, () => {
    console.log( 'server is up on:', port );
})

// routes
app.get( '/messages', (req, res) => {
    console.log( '/messages GET hit' );
    // res.send ( 'APP.GET ON /MESSAGES IS WORKING!' ); // once working, you can comment out
    res.send ( messages );
})