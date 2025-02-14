<?php
/**
 * Register & Unregister Block Styles.
 *
 * Styles registered with PHP can only be unregistered with PHP.
 * Styles registered with JavaScript can only be unregistered with JavaScript.
 *
 * @link https://developer.bu.edu/gutenberg/handbook/block-styles/
 *
 * @package block-sandbox
 */

namespace BU\plugin_slug\Blocks;

/**
 * Register.
 *
 * @link https://developer.wordpress.org/reference/functions/register_block_style/
 */
register_block_style(
    'core/quote',
    array(
        'name'         => 'quote-php-style',
        'label'        => __( 'PHP Style', 'block-sandbox' ),
    )
);
register_block_style(
    'core/quote',
    array(
        'name'         => 'quote-php-style-2',
        'label'        => __( 'PHP Style 2', 'block-sandbox' ),
    )
);
register_block_style(
    'core/quote',
    array(
        'name'         => 'quote-php-style-3',
        'label'        => __( 'PHP Style 3', 'block-sandbox' ),
    )
);

/**
 * Unregister a style. This only works for server-side registered styles. Use the JavaScript method instead. See ./src/js/blocks/block-styles.js. The code below is for demonstration only.
 *
 * @link https://developer.wordpress.org/reference/functions/unregister_block_style/
 */
unregister_block_style( 'core/quote', 'quote-php-style-2' );
