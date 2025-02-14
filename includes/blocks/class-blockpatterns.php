<?php
/**
 * Block Pattern registration
 *
 * @package block-sandbox
 */

namespace BU\theme_slug\Blocks;

use WP_Block_Patterns_Registry;

/**
 *
 */
class BlockPatterns {
	/**
	 * Class Instance.
	 *
	 * @var object
	 */
	private static $instance;

	/**
	 * Singleton method.
	 */
	public static function get_instance() {
		if ( null === static::$instance ) {
			static::$instance = new static();
		}

		return static::$instance;
	}

	/**
	 * Construction Method.
	 * Set up variables and add hooks
	 */
	protected function __construct() {
		global $wp_version;

		add_action( 'init', array( $this, 'pattern_category' ) );
		add_action( 'after_setup_theme', array( $this, 'core_patterns' ) );

		if ( $wp_version < 6 ) {
			add_action( 'init', array( $this, 'register_patterns' ) );
		}
	}

	/**
	 * Clone Method.
	 */
	private function __clone() {
	}

	/**
	 * Wakeup Method.
	 */
	private function __wakeup() {
	}

	/**
	 * Add custom pattern category.
	 */
	public function pattern_category() {
		/**
		 * Set up the category our block patterns will live in.
		 *
		 * @link https://developer.wordpress.org/reference/functions/register_block_pattern_category/
		 */
		register_block_pattern_category(
			RESPONSIVE_CHILD_THEME_DOMAIN . '-pattern-category',
			array( 'label' => __( 'BU: Theme Starter Custom Patterns', 'block-sandbox' ) )
		);
	}

	/**
	 * Disable core & remote patterns.
	 *
	 */
	public function core_patterns() {
		remove_theme_support( 'core-block-patterns' );
		add_filter( 'should_load_remote_block_patterns', '__return_false' );
	}

	/**
	 * Register patterns automagically from the `/patterns/` folder.
	 */
	public function register_patterns() {
		$default_headers = array(
			'title'         => 'Title',
			'slug'          => 'Slug',
			'description'   => 'Description',
			'viewportWidth' => 'Viewport Width',
			'categories'    => 'Categories',
			'keywords'      => 'Keywords',
			'blockTypes'    => 'Block Types',
			'inserter'      => 'Inserter',
		);

		/*
		 * Register patterns for the active theme. If the theme is a child theme,
		 * let it override any patterns from the parent theme that shares the same slug.
		 */
		$themes     = array();
		$stylesheet = get_stylesheet();
		$template   = get_template();
		if ( $stylesheet !== $template ) {
			$themes[] = wp_get_theme( $stylesheet );
		}
		$themes[] = wp_get_theme( $template );

		foreach ( $themes as $theme ) {
			$dirpath = $theme->get_stylesheet_directory() . '/patterns/';
			if ( ! is_dir( $dirpath ) || ! is_readable( $dirpath ) ) {
				continue;
			}
			if ( file_exists( $dirpath ) ) {
				$files = glob( $dirpath . '*.php' );
				if ( $files ) {
					foreach ( $files as $file ) {
						$pattern_data = get_file_data( $file, $default_headers );

						if ( empty( $pattern_data['slug'] ) ) {
							continue;
						}

						if ( WP_Block_Patterns_Registry::get_instance()->is_registered( $pattern_data['slug'] ) ) {
							continue;
						}

						// Title is a required property.
						if ( ! $pattern_data['title'] ) {
							continue;
						}

						// For properties of type array, parse data as comma-separated.
						foreach ( array( 'categories', 'keywords', 'blockTypes' ) as $property ) {
							if ( ! empty( $pattern_data[ $property ] ) ) {
								$pattern_data[ $property ] = array_filter(
									preg_split(
										'/[\s,]+/',
										(string) $pattern_data[ $property ]
									)
								);
							} else {
								unset( $pattern_data[ $property ] );
							}
						}

						// Parse properties of type int.
						foreach ( array( 'viewportWidth' ) as $property ) {
							if ( ! empty( $pattern_data[ $property ] ) ) {
								$pattern_data[ $property ] = (int) $pattern_data[ $property ];
							} else {
								unset( $pattern_data[ $property ] );
							}
						}

						// Parse properties of type bool.
						foreach ( array( 'inserter' ) as $property ) {
							if ( ! empty( $pattern_data[ $property ] ) ) {
								$pattern_data[ $property ] = in_array(
									strtolower( $pattern_data[ $property ] ),
									array( 'yes', 'true' ),
									true
								);
							} else {
								unset( $pattern_data[ $property ] );
							}
						}

						// Translate the pattern metadata.
						$text_domain = $theme->get( 'TextDomain' );
						//phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText, WordPress.WP.I18n.NonSingularStringLiteralContext, WordPress.WP.I18n.NonSingularStringLiteralDomain, WordPress.WP.I18n.LowLevelTranslationFunction
						$pattern_data['title'] = translate_with_gettext_context( $pattern_data['title'], 'Pattern title', $text_domain );
						if ( ! empty( $pattern_data['description'] ) ) {
							//phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText, WordPress.WP.I18n.NonSingularStringLiteralContext, WordPress.WP.I18n.NonSingularStringLiteralDomain, WordPress.WP.I18n.LowLevelTranslationFunction
							$pattern_data['description'] = translate_with_gettext_context( $pattern_data['description'], 'Pattern description', $text_domain );
						}

						// The actual pattern content is the output of the file.
						ob_start();
						include $file;
						$pattern_data['content'] = ob_get_clean();
						if ( ! $pattern_data['content'] ) {
							continue;
						}

						register_block_pattern( $pattern_data['slug'], $pattern_data );
					}
				}
			}
		}
	}
}

BlockPatterns::get_instance();
