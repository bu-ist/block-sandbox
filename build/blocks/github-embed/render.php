<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$codeview = esc_url_raw( $attributes['githuburl'] );
$raw      = str_replace( 'https://github.com/', 'https://raw.githubusercontent.com/', $codeview );
$raw      = str_replace( '/blob/', '/refs/heads/', $raw );

$response = wp_remote_get( $raw );
if ( ( ! is_wp_error( $response ) ) && ( 200 === wp_remote_retrieve_response_code( $response ) ) ) {
	?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>

	<pre class="line-numbers" data-line="<?php echo esc_attr( $attributes['lines'] ); ?>">
		<code class="match-braces language-<?php echo esc_attr( $attributes['language'] ); ?>" data-prismjs-copy="Copy"><?php echo trim( htmlentities( $response['body'] ) ); ?></code>
	</pre>
	<p><a href="<?php echo esc_url( $codeview ); ?>">{view on github}</a></p>

</div>
<?php
} else {
	echo 'invalid url ' . esc_url( $raw );
}
