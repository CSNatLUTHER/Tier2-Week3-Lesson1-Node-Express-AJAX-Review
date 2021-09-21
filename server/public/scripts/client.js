$( document ).ready ( onReady );

function onReady(){
    console.log( 'JQuery is ready!' );
    $( '#submitButton').on ( 'click', sendMessages );
    interval = setInterval( getMessages, 3000 )
}

function getMessages() {
    console.log( 'in getMessages');
    $.ajax({
        method: 'GET',
        url: '/messages'
    }).then( function( response ) {
        console.log( 'back from server with:', response );
        let el = $("#messages")
        el.empty();
        for(let i=0; i<response.length; i++){
            if (`${response[i].name}` === 'Chris' ){
                console.log( 'in if statement. background change is working');
                el.append(`<p class="textPlacmentRight"><span class="blue"><b>${response[i].name}:</b> ${response[i].message}</span></p>`);
            } // end if
            else {
                console.log( 'in else statement! why is background color not changing?');
                el.append(`<p class="textPlacmentLeft"><span class="grey"> <b>${response[i].name}:</b> ${response[i].message}</span></p>`);
            } // end else if
        } // end for loop
    }).catch( function ( err ){
        alert( 'There is an error.' );
        console.log( 'There is an error:', err );
        clearInterval( interval );
    })
}

function sendMessages(){
    console.log('in sendMessages');
    // get user input and place in object
        let objectToSend = {
            name: $('#messageName').val(),
            message: $('#messageText').val()
        }
        $('#messageText').val('');
        console.log( 'sending:', objectToSend );
    // make a POST request to server
    $.ajax({
        method: 'POST',
        url: '/messages',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from POST:', response );
        // update the DOM
        getMessages();
    }).catch( function( err ){
        console.log( 'Error:', err );
        alert( 'There\'s an error!')
    })
}