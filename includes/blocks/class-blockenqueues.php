<?php
/**
 * Class to manage block assets on the front end of the website where the theme is used.
 *
 * This was just quickly copied from BU Stats so the assets in this prototype could be enqueued for now.
 *
 * @package theme-slug
 */

namespace BU\theme_slug\Blocks;

/**
 * Class Assets
 */
class BlockEnqueues {


	/**
	 * Assets constructor.
	 *
	 * @since 0.1.0
	 */
	public function __construct() {
		// Enqueue front-end scripts & styles.
		add_action( 'wp_enqueue_scripts', array( $this, 'frontend_block_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'frontend_block_scripts' ) );
		// Enqueue block editor scripts & styles.
		add_action( 'enqueue_block_editor_assets', array( $this, 'block_editor_styles' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'block_editor_scripts' ) );
	}

	/**
	 * Enqueue Frontend styles.
	 *
	 * @since 0.1.0
	 */
	public function frontend_block_styles() {

		// These are registered in class-blocks.php.
		wp_enqueue_style( RESPONSIVE_CHILD_THEME_DOMAIN . '-blocks-common-styles' );

		if ( THEME_SLUG_BLOCKS_BUNDLED ) {
			wp_enqueue_style( RESPONSIVE_CHILD_THEME_DOMAIN . '-blocks-bundled-styles' );
		}

		// Enqueue any other frontend styles or scripts needed related to blocks specifically.
	}

	/**
	 * Enqueue Frontend Javascript.
	 *
	 * When the block defines render_callback during registration in PHP, then the block author is responsible for enqueuing the script.
	 *
	 * @since 0.2.0
	 */
	public function frontend_block_scripts() {

		// @todo document
		$block_jsons = glob( THEME_SLUG_BLOCKS_BUILD_DIR . '/*/view.js' );

		foreach ( $block_jsons as $path ) {

			// Get the folder the block is in.
			$block_folder_path = dirname( $path );

			// Get the folder name of the block.
			$block_folder_name = basename( $block_folder_path );

			$asset_file = include $block_folder_path . '/view.asset.php';

			// Enqueue frontend `view.js` files for each block.
			wp_enqueue_script(
				RESPONSIVE_CHILD_THEME_DOMAIN . '-' . $block_folder_name . '-frontend',
				THEME_SLUG_BLOCKS_BUILD_URL . '/' . $block_folder_name . '/view.js',
				$asset_file['dependencies'],
				$asset_file['version'],
				array(
					'strategy' => 'defer',
				),
			);
		}
	}

	/**
	 * Enqueue editor styles
	 *
	 * @since 0.2.0
	 */
	public function block_editor_styles() {

		// Enqueue the Main stylesheet for the plugin if needed for non-block styles.
		wp_enqueue_style(
			RESPONSIVE_CHILD_THEME_DOMAIN . '-block-editor',
			RESPONSIVE_CHILD_THEME_URL . '/build/css/block-editor.css',
			array(),
			RESPONSIVE_CHILD_THEME_VERSION,
		);
	}

	/**
	 * Enqueue editor javascript
	 *
	 * @since 0.2.0
	 */
	public function block_editor_scripts() {
		if ( file_exists( RESPONSIVE_CHILD_THEME_DIR . '/build/js/block-editor.js' ) ) {
			$asset_file = include RESPONSIVE_CHILD_THEME_DIR . '/build/js/block-editor.asset.php';

			wp_enqueue_script(
				RESPONSIVE_CHILD_THEME_DOMAIN . '-block-editor',
				RESPONSIVE_CHILD_THEME_URL . '/build/js/block-editor.js',
				array_merge( $asset_file['dependencies'], ['wp-edit-post'] ),
				// $asset_file['dependencies'],
				$asset_file['version'],
				array(
					'strategy' => 'defer',
				),
			);
		}
	}
}

// Initialize the class.
$block_enqueues = new BlockEnqueues();
