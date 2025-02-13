<?php
/**
 * Class to manage registration of blocks and assets within the editor.
 *
 * @package theme-slug
 */

namespace BU\theme_slug\Blocks;

/**
 * Class Assets
 */
class Blocks {


	/**
	 * Constructor.
	 *
	 * @since 0.1.0
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'setup' ) );
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_filter( 'block_categories_all', array( $this, 'custom_block_category' ) );
	}

	/**
	 * Setup dependencies for block registration.
	 *
	 * @since 0.1.0
	 */
	public function setup() {
		// Register Shared / Common styles.
		wp_register_style(
			RESPONSIVE_CHILD_THEME_DOMAIN . '-blocks-common-styles',
			RESPONSIVE_CHILD_THEME_URL . '/build/css/blocks/blocks-common.css',
			array(),
			filemtime( RESPONSIVE_CHILD_THEME_DIR . '/build/css/blocks/blocks-common.css' ),
			'all'
		);

		/**
		 * Register Bundled Block styles.
		 *
		 * Dependency: The Block Common Styles so common/shared styles are enqueued before
		 * the styles for the block, allowing the block styles to override the common styles.
		 */
		if ( THEME_SLUG_BLOCKS_BUNDLED ) {
			wp_register_style(
				RESPONSIVE_CHILD_THEME_DOMAIN . '-blocks-bundled-styles',
				RESPONSIVE_CHILD_THEME_URL . '/build/css/blocks/blocks-bundled.css',
				array( RESPONSIVE_CHILD_THEME_DOMAIN . '-blocks-common-styles' ),
				filemtime( RESPONSIVE_CHILD_THEME_DIR . '/build/css/blocks/blocks-bundled.css' ),
				'all'
			);
		}
	}

	/**
	 * Create custom block category. Blocks can be assigned to this category the "category" node in block.json.
	 *
	 * @link https://developer.wordpress.org/reference/hooks/block_categories_all/
	 * @since 0.1.0
	 */
	public function custom_block_category( $categories ) {
		array_unshift(
			$categories,
			array(
				'slug'  => RESPONSIVE_CHILD_THEME_DOMAIN . '-block-category',
				'title' => 'BU: Theme Starter Block Category (PHP)',
			)
		);

		return $categories;
	}

	/**
	 * Register Blocks in the Theme
	 *
	 * @since 0.1.0
	 */
	public function register_blocks() {
		if ( file_exists( THEME_SLUG_BLOCKS_BUILD_DIR ) ) {
			$block_jsons = glob( THEME_SLUG_BLOCKS_BUILD_DIR . '/*/block.json' );

			foreach ( $block_jsons as $path ) {

				// Get the folder the block is in.
				$block_folder_path = dirname( $path );

				// Get the folder name of the block.
				$block_folder_name = basename( $block_folder_path );

				// Register Block Arguments Array.
				$block_options = [];

				// Standard path to a block's render template.
				$block_render_file_path = $block_folder_path . '/render.php';

				if ( file_exists( $block_render_file_path ) ) {

					// The block has a render.php file, add a render_callback when registering the block.
					$block_options['render_callback'] = function ( $attributes, $content, $block ) use ( $block_render_file_path, $block_folder_name ) {

						// Include the render.php file and return it's output using output buffering.
						ob_start();

						include $block_render_file_path;

						return ob_get_clean();
					};
				}

				if ( THEME_SLUG_BLOCKS_BUNDLED ) {
					// Don't load a stylesheet for this block, as we are loading a single stylesheet with all block styles bundled together.
					$block_options['style'] = RESPONSIVE_CHILD_THEME_DOMAIN . '-bundled-styles';
				} else {
					// Register individual block's stylesheets.
					wp_register_style(
						$block_folder_name . '-styles',
						THEME_SLUG_BLOCKS_BUILD_URL . '/' . $block_folder_name . '/style-index.css',
						array( RESPONSIVE_CHILD_THEME_DOMAIN . '-blocks-common-styles' ),
						filemtime( THEME_SLUG_BLOCKS_BUILD_DIR . '/' . $block_folder_name . '/style-index.css' )
					);

					// Add the individual block's stylesheet to the arguments so WP registers.
					$block_options['style'] = $block_folder_name . '-styles';
				}

				register_block_type_from_metadata( $block_folder_path, $block_options );
			}
		}
	}
}

// Initialize the class.
$block_setup = new Blocks();
