<?php
/**
 * Enqueue scripts and styles.
 *
 * @package theme-slug
 */

namespace BU\theme_slug;

/**
 * Class Assets
 */
class ThemeEnqueues {


	/**
	 * Assets constructor.
	 *
	 * @since 0.1.0
	 */
	public function __construct() {
		// Enqueue front-end scripts & styles.
		add_action( 'wp_enqueue_scripts', array( $this, 'frontend_styles' ), 11 );
		add_action( 'wp_enqueue_scripts', array( $this, 'frontend_scripts' ) );
		// Enqueue admin scripts & styles.
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_styles' ) );
		add_action( 'admin_init', array( $this, 'tinymce_styles' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_scripts' ) );
		// Enqueue classic editor styles.
		add_action( 'current_screen', array( $this, 'classic_editor_assets' ) );
	}


	/**
	 * Enqueue Frontend styles.
	 *
	 * @since 0.1.0
	 */
	public function frontend_styles() {

		// Remove legacy style enqueuements.
		wp_dequeue_style( 'responsive-framework' );
		wp_dequeue_style( 'responsive-framework-ie' );

		// Enqueue the Main stylesheet for the plugin if needed for non-block styles.
		wp_enqueue_style(
			RESPONSIVE_CHILD_THEME_DOMAIN,
			RESPONSIVE_CHILD_THEME_URL . '/build/css/theme.css',
			array(),
			RESPONSIVE_CHILD_THEME_VERSION,
		);
	}

	/**
	 * Enqueue Frontend javascript
	 *
	 * @since 0.2.0
	 */
	public function frontend_scripts() {

		if ( file_exists( RESPONSIVE_CHILD_THEME_DIR . '/build/js/theme.js' ) ) {
			$asset_file = include RESPONSIVE_CHILD_THEME_DIR . '/build/js/theme.asset.php';

			wp_enqueue_script(
				RESPONSIVE_CHILD_THEME_DOMAIN,
				RESPONSIVE_CHILD_THEME_URL . '/build/js/theme.js',
				$asset_file['dependencies'],
				$asset_file['version'],
				array(
					'strategy' => 'defer',
				),
			);
		}
	}

	/**
	 * Enqueue Admin styles
	 *
	 * @since 0.2.0
	 */
	public function admin_styles() {

		// Enqueue the Main stylesheet for the plugin if needed for non-block styles.
		wp_enqueue_style(
			RESPONSIVE_CHILD_THEME_DOMAIN . '-admin',
			RESPONSIVE_CHILD_THEME_URL . '/build/css/admin.css',
			array(),
			RESPONSIVE_CHILD_THEME_VERSION,
		);
	}

	/**
	 * Allows theme developers to link a custom stylesheet file to the TinyMCE visual editor.
	 *
	 * @since 0.1.0
	 */
	public function tinymce_styles() {

		add_theme_support( 'editor-styles' );
		add_editor_style( RESPONSIVE_CHILD_THEME_URL . '/build/css/editor-styles.css' );
	}

	/**
	 * Enqueue Admin javascript
	 *
	 * @since 0.2.0
	 */
	public function admin_scripts() {

		if ( file_exists( RESPONSIVE_CHILD_THEME_DIR . '/build/js/admin.js' ) ) {
			$asset_file = include RESPONSIVE_CHILD_THEME_DIR . '/build/js/admin.asset.php';

			wp_enqueue_script(
				RESPONSIVE_CHILD_THEME_DOMAIN . '-admin',
				RESPONSIVE_CHILD_THEME_URL . '/build/js/admin.js',
				$asset_file['dependencies'],
				$asset_file['version'],
				array(
					'strategy' => 'defer',
				),
			);
		}
	}

	/**
	 * Enqueue classic editor styles. These only appear on classic-editor pages.
	 *
	 * Registers an editor stylesheet for the theme only if
	 * the screen in the admin is the block editor. This prevents
	 * the same stylesheet from also being loaded into classic editor
	 * instances.
	 *
	 * @param object $current_screen Current WP_Screen object.
	 * @return null
	 * @author Tim King <timking@bu.edu>
	 * @link https://developer.wordpress.org/reference/hooks/current_screen/
	 */
	public function classic_editor_assets( $current_screen ) {
		global $pagenow;

		if ( ! is_admin() ) {
			return false;
		}

		if ( ! $current_screen->is_block_editor && in_array( $pagenow, array( 'post.php', 'post-new.php' ) ) ) {
			wp_enqueue_style(
				RESPONSIVE_CHILD_THEME_DOMAIN . '-classic-editor',
				RESPONSIVE_CHILD_THEME_URL . '/build/css/classic-editor.css',
				array(),
				RESPONSIVE_CHILD_THEME_VERSION,
			);

			if ( file_exists( RESPONSIVE_CHILD_THEME_DIR . '/build/js/classic-editor.js' ) ) {
				$asset_file = include RESPONSIVE_CHILD_THEME_DIR . '/build/js/classic-editor.asset.php';

				wp_enqueue_script(
					RESPONSIVE_CHILD_THEME_DOMAIN . '-classic-editor',
					RESPONSIVE_CHILD_THEME_URL . '/build/js/classic-editor.js',
					$asset_file['dependencies'],
					$asset_file['version'],
					array(
						'strategy' => 'defer',
					),
				);
			}
		}
	}
}

// Initialize the class.
$plugin_enqueues = new ThemeEnqueues();
