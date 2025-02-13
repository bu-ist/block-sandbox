// Load the library and specify options
// @link https://attacomsian.com/blog/nodejs-replace-string-in-file
const packageInfo = require( '../package.json' );
const version = packageInfo.version;
const description = packageInfo.description;
const repository = packageInfo.repository;
const name = packageInfo.name;
const homepage = packageInfo.homepage;

const themeFile = 'style.css';
const minFile = 'build/css/theme.css';

const cssHeader =
	`@charset "UTF-8";
/*
Theme Name: Theme Name
Theme URI: ` +
	repository +
	`
Description: ` +
	description +
	`
Author: Boston University Interactive Design
Website: ` +
	homepage +
	`
Version: ` +
	version +
	`
Text Domain: ` +
	name +
	`
Template: responsive-framework-3x
*/
`;

console.log( 'Updating ' + themeFile + ' to ' + cssHeader );

const fs = require( 'fs' );

// Read file into a string
fs.readFile( minFile, 'utf-8', ( err, contents ) => {
	if ( err ) {
		return console.error( err );
	}

	const updated = cssHeader + contents;

	// Write back to file
	fs.writeFile( minFile, updated, 'utf-8', ( err2 ) => {
		if ( err2 ) {
			console.log( err2 );
		}
	} );
} );

// Read file into a string
fs.readFile( themeFile, 'utf-8', ( err, contents ) => {
	if ( err ) {
		return console.error( err );
	}

	// Replace string occurrences
	const updated = cssHeader;

	// Write back to file
	fs.writeFile( themeFile, updated, 'utf-8', ( err2 ) => {
		if ( err2 ) {
			console.log( err2 );
		}
	} );
} );
