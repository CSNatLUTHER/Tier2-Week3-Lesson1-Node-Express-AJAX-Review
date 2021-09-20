// requires
let express = require ( 'express' );
let app = express();


// uses
app.use( express.static( 'server/public' ) );

// global variables
const port = 5000

// spin up server
app.listen( port, () => {
    console.log( 'server is up on:', port );
})

// routes