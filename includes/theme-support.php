<?php
/**
 * Theme Support settings.
 *
 * @package labs-theme-blocks
 * @link https://github.com/WordPress/gutenberg/blob/wp/5.8/docs/how-to-guides/themes/theme-support.md
 * @todo move this to gutenberg framework when available
 * @todo make this a settings panel for admins?
 * @link https://github.com/bu-ist/id-gutenberg/issues/95
 */

namespace BU\theme_slug;

/**
 * BU defined defaults, change according to your requirements. Many of these support optional extra arguments.
 *
 * @return null
 */
function setup_theme_supported_features() {
	/**
	* Supported in Future Versions of WP
	*/
	// 'border', //Enable all border settings.
	// 'appearance-tools', // WP 6.5?: Enable the WP Global Styles settings.
	// 'block-template-parts', // WP 6.1: Enable Block Based Template parts, allowing administrators to edit parts of the site using blocks. This is off by default.
	// 'disable-layout-styles', // WP 6.1: By enabling the following code, themes commit to providing their own structural styling, as using this feature will result in core blocks displaying incorrectly in both the editor and site frontend.
	// 'link-color',

	/**
	 * Theme support options that require passing data
	 * when enabling via add_theme_support().
	 *
	 * For example:
	 * add_theme_support( 'editor-color-palette', array(..array containing color objects..);
	 *
	 * Note: these can be set in theme.json which is usually preferred.
	 */
	// 'custom-units'
	// 'editor-color-palette'
	// 'editor-gradient-presets'
	// 'editor-font-sizes'

	$add_support = [
		'align-wide', // Allow blocks such as the image block have the possibility to define a "wide" or "full" alignment.
		'disable-custom-colors', // Disable the color palette offered to blocks that allows the user to select a custom color different from the editor or theme default colors.
		'disable-custom-font-sizes', // Disable the ability to set custom font sizes.
		'disable-custom-gradients', // Disable the ability to set a custom gradient.
		'editor-styles', // Enqueue and load CSS on the editor screen. For the classic editor, this was the only function needed to add style to the editor. For the new block editor, you also need to use `add_editor_style`. This feature is automatically enabled for block themes, and does not need to be included during theme setup.
		'html5',
		'post-thumbnails', // Post thumbnails and featured images allow your users to choose an image to represent their post. This feature is automatically enabled for block themes, and does not need to be included during theme setup.
		'responsive-embeds', // To make the content resize and keep its aspect ratio, the <body> element needs the wp-embed-responsive class. This is not set by default, and requires the theme to opt in to the responsive-embeds feature.
		'wp-block-styles', // The block editor allows themes to opt in to slightly more opinionated styles for the front end. An example of these styles is the default color bar to the left of blockquotes. If you’d like to use these opinionated styles in a classic theme, add theme support for wp-block-styles

		// 'admin-bar',
		// 'custom-logo',
		// 'customize-selective-refresh-widgets',
		// 'custom-spacing', // Some blocks can have padding controls. This is off by default. Should be set in Theme.json instead.
		// 'dark-editor-style', // For themes with dark backgrounds. Must use `editor-style` and enqueue an editor stylesheet with a dark color background applied to the body, etc.
		// 'featured-content',
		// 'menus',
		// 'post-formats', // Post formats allow users to format their posts in different ways.
		// 'starter-content',
		// 'title-tag',
		// 'widgets',
	];

	$remove_support = [
		'automatic-feed-links', // Enables post and comment RSS feeds by default. This feature is automatically enabled for block themes, and does not need to be included during theme setup.
		'block-templates',
		'core-block-patterns', // WordPress comes with a number of block patterns built-in, themes can opt-out of the bundled patterns and provide their own set.
		'custom-background',
		'custom-header',
		'custom-line-height', // Some blocks like paragraph and headings support customizing the line height.
		'widgets-block-editor', // Disabled Widget Block Editor https://developer.wordpress.org/block-editor/how-to-guides/widgets/opting-out/
	];

	foreach ( $add_support as $_add ) {
		add_theme_support( $_add );
	}

	foreach ( $remove_support as $_remove ) {
		remove_theme_support( $_remove );
	}
}
add_action( 'after_setup_theme', __NAMESPACE__ . '\\setup_theme_supported_features' );

/**
 * Add documentation link to admin bar.
 *
 * @param object $wp_admin_bar WP Admin Bar links.
 */
add_action(
	'admin_bar_menu',
	function ( $wp_admin_bar ) {
		if ( responsive_is_wpdocs() ) {
			return;
		}

		// Parent admin menu.
		$wp_admin_bar->add_node(
			[
				'id'    => 'wpdocs',
				'title' => __( 'Resources', 'labs-theme-blocks' ),
				'href'  => 'https://wpdocs.bu.edu/',
				'meta'  => [
					'class' => 'wpdocs',
				],
			]
		);

		$sub_menus = apply_filters(
			'wpdocs_menu',
			[
				[
					'id'    => 'main-docs',
					'title' => __( 'Primary Documentation', 'labs-theme-blocks' ),
					'href'  => 'https://wpdocs.bu.edu/',
				],
				[
					'id'    => 'client-docs',
					'title' => __( 'Client Documentation', 'labs-theme-blocks' ),
					'href'  => 'https://wpdocs.bu.edu/client',
				],
			]
		);

		foreach ( $sub_menus as $sub_menu ) {
			$wp_admin_bar->add_node(
				array_merge( [ 'parent' => 'wpdocs' ], $sub_menu )
			);
		}
	},
	999
);
