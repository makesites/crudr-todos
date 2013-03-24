// different config for localhost
var config;	
//	is_localhost = ( window.location.hostname.search("localhost") > -1 );
var localhost = "localhost"; // IP or "localhost"
var host = window.location.hostname || window.location.origin;
// is localhost? 
var DEV = ( host.search(localhost) > -1 );

if( DEV ){
	
	config = {
		key : "793ad944482bcbf853ec884c835791ac",
		log : true
	};
       
} else { 
	
	config = {
		key : "f5424914fd9959ae36ee5ffe5123bee8",
		log : true
	};

	
};
