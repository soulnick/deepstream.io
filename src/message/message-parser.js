var C = require( '../constants/constants' );

exports.parse = function( message ) {
	var parsedMessages = [],
		rawMessages = message.split( messageSeperator ),
		i;

	for( i = 0; i < rawMessages.length; i++ ) {
		parsedMessages.push( parseMessage( rawMessages[ i ] ) );
	}

	return parsedMessages;
};

var messageSeperator = String.fromCharCode( 30 ), // ASCII Record Seperator 1E
	messagePartSeperator = String.fromCharCode( 31 ), // ASCII Unit Separator 1F
	actions = {},
	key;

for( key in C.ACTIONS ) {
	actions[ C.ACTIONS[ key ] ] = key;
}

var parseMessage = function( message ) {
	var parts = message.split( messagePartSeperator ), 
		messageObject = {};

	if( parts.length < 3 ) {
		return null;
	}

	if( actions[ parts[ 1 ] ] === undefined ) {
		return null;
	}

	messageObject.raw = message;
	messageObject.topic = parts[ 0 ];
	messageObject.action = parts[ 1 ];
	messageObject.data = parts.splice( 2 );

	return messageObject;
};