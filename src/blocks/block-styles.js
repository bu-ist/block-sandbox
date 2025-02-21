/**
 * Block Styles allow alternative styles to be applied to existing blocks. They work by adding a className to the block’s wrapper. This className can be used to provide an alternative styling for the block if the block style is selected.
 *
 * Styles registered with PHP can only be unregistered with PHP.
 * Styles registered with JavaScript can only be unregistered with JavaScript.
 *
 * @link https://developer.bu.edu/gutenberg/handbook/block-styles/
 */

const stylesToAddRemove = {
	'core/table': [ 'stripes', 'regular' ],
	'core/pullquote': [ 'solid-color', 'default' ], // removes from dd but not picker
};

/**
 * Unregister existing styles.
 */
wp.domReady( function () {
	Object.entries( stylesToAddRemove ).forEach( ( [ block, styles ] ) => {
		// console.log(block + " , " + styles);
		wp.blocks.unregisterBlockStyle( block, styles );
	} );
} );
