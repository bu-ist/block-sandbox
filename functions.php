<?php
/**
 * Theme functions
 *
 * @link     https://github.com/bu-ist/responsive-framework/wiki/Starting-a-new-Child-Theme
 *
 * @package theme-slug
 */

namespace BU\theme_slug;

// Disabling phpcs check for default responsi constants.
// phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedConstantFound
/**
 * Current theme's domain.
 */
define( 'RESPONSIVE_CHILD_THEME_DOMAIN', 'theme-slug' );

/**
 * Current theme's server path. No trailing /
 */
define( 'RESPONSIVE_CHILD_THEME_DIR', get_stylesheet_directory() );

/**
 * Current theme's web path. No trailing /
 */
define( 'RESPONSIVE_CHILD_THEME_URL', get_theme_file_uri() );

/**
 * SEO functionality.
 *
 * @link https://developer.bu.edu/webteam/developer/libraryframework/wordpress/plugins/post-details/#:~:text=after%20the%20text.-,SEO,Output%20meta%20elements.,-Coming%20in%20Version
 */
define( 'BU_SUPPORTS_SEO', false );

/**
 * Current theme's version.
 *
 * This DOES NOT control the version of Responsive Framework.
 *
 * It represents the version of this child theme and is used to version theme
 * assets (style.css, production.js, etc.) when loaded.
 *
 * @link https://semver.org/
 */
define( 'RESPONSIVE_CHILD_THEME_VERSION', wp_get_theme()->get( 'Version' ) );

/**
 * Specifies the responsive layout for the theme. Disables the option in the
 * Customizer.
 *
 * Removing this allows the layout to be changed in the Customizer.
 *
 * Available values: `default`, `top-nav`, `side-nav`, `no-nav`, `mega-nav`.
 *
 * @link https://github.com/bu-ist/responsive-framework/wiki/Changing-Available-Layouts-And-Default-Layout
 */
define( 'BU_RESPONSIVE_LAYOUT', 'default' );

/**
 * Specifies the site's branding type. Disables the option in the Customizer.
 *
 * Removing this allows the branding type to be changed in the Customizer.
 *
 * Available values: `logotype`, `signature`, `unbranded`.
 */
define( 'BU_BRANDING_TYPE', 'logotype' );

/**
 * Defines a sidebar position for the theme. Disables the option in the
 * Customizer.
 *
 * Removing this allows the layout to be changed in the Customizer.
 *
 * Available values: `right`, `left`, `bottom`.
 */
define( 'BU_RESPONSIVE_SIDEBAR_POSITION', 'right' );

// Re-enabling constant check.
// phpcs:enable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedConstantFound

/**
 * @todo: Delete the following code block and the dev/prototyping folder before going live.
 * These lines include the dev/prototyping templates development hooks for use in
 * designing sections rapidly.
 */
if ( file_exists( __DIR__ . '/dev/prototyping/dev-functions.php' ) ) {
	include_once 'dev/prototyping/dev-functions.php';
	add_filter( 'after_setup_theme', 'dev_sections' );
}




/**
 * Theme Supports.
 */
require_once 'includes/theme-support.php';


// WP Docs menu
// Example code for additional items:
	//$wpdocs_menu[] = [
		//  'id'    => '',
		//  'title' => __( '', 'theme-slug' ),
		//  'href'  => '',
		//];
add_filter(
	'wpdocs_menu',
	function ( $wpdocs_menu ) {
		// Add additional menu items here.
		return $wpdocs_menu;
	}
);

/**
 * Enqueue theme scripts and styles.
 */
require_once 'includes/class-themeenqueues.php';

/**
 * Blocks & Assets
 */
require_once 'includes/blocks/functions.php';

// Uncomment to unbundle plugin styles.
// add_filter( 'plugin_slug_bundle_block_styles', '__return_false' );

// Uncomment to remove decorative plugin styles.
// add_filter( 'plugin_slug_decorative_block_styles', '__return_false' );
