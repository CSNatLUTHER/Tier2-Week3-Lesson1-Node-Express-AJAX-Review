// requires
let express = require ( 'express' );
let app = express();

let bodyParser = require( 'body-parser' );


// uses
    // server static files
    app.use( express.static( 'server/public' ) ); // base folder for files

    app.use( bodyParser.urlencoded({ extended: true } ) );


// global variables
const port = 5000
let messages = [];

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

app.post( '/messages', (req, res ) =>{
    console.log('/messages POST', req.body );
    messages.push( req.body );
    res.sendStatus( 201 );
})