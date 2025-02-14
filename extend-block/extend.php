<?php
/**
 * ???
 *
 * @link https://github.com/bu-ist/id-gutenberg/issues/293
 *
 * @package block-sandbox
 */

namespace BU\plugin_slug\Blocks;

/**
 * Filters the arguments for registering a block type.
 *
 * @link https://developer.wordpress.org/reference/hooks/register_block_type_args/
 *
 * @param array  $args       The block arguments for the registered block type.
 * @param string $block_type The block type name, including namespace.
 * @return array             The modified block arguments.
 */
function tim_1( $args, $block_type ) {

    // Only add the attribute to Image blocks.
    if ( $block_type === 'core/code' ) {
		// print_r($args);
        if ( ! isset( $args['attributes'] ) ) {
            $args['attributes'] = array();
        }

        $args['attributes']['whatever'] = array(
            'type'    => 'string',
            'default' => 'fart',
        );
		// print_r($args);
    }

    return $args;
}
add_filter( 'register_block_type_args', __NAMESPACE__ . '\\tim_1', 10, 2 );

/**
 * Filters the content of a single block. This modifies a block's frontend rendering.
 *
 * @link https://developer.wordpress.org/reference/hooks/render_block_this-name/
 *
 * @param string $block_content The original HTML content of the block.
 * @param array  $block         The block details, including attributes.
 * @return string               The modified block content with the decorative role applied, or the original content if not decorative.
 */
function tim_2( $block_content, $block ) {
	// $is_decorative = $block['attrs']['isDecorative'] ?? false;
		// print_r($block);

		// why can't i access instance properties?
    // Only apply the modifications if the image is decorative.
    // if ( $is_decorative ) {
        // WP_HTML_Tag_Processor not available until 6.2
		$block_content = str_replace('<code>', '<code class="poo">', $block_content);
		$block_content = "my mod---".$block_content;
		return $block_content;
    // }

    // return $block_content;
    // https://highlightjs.org/ -- no line numbers
    // https://prismjs.com/ -- new top choice

}
add_filter( 'render_block_core/code', __NAMESPACE__ . '\\tim_2', 10, 2 );
