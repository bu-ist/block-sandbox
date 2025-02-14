<?php
/**
 * Template Name: Page with Sidebar
 * Child theme level override of R3 template used to render a static page. This retains the sidebar and is the former default file.
 *
 * @package Responsive_Framework
 * @link https://github.com/bu-ist/responsive-framework-3x/blob/develop/page.php Source.
 */

get_header();
?>

<?php
while ( have_posts() ) :
	the_post();
	?>

	<?php
	/**
	 * Fires immediately before the opening article tag.
	 *
	 * @since 2.3.3
	 */
	do_action( 'r_before_opening_article' );
	?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'content-area' ); ?>>

	<?php
		/**
		 * Fires immediately after opening article tag.
		 *
		 * @since 2.3.3
		 */
		do_action( 'r_after_opening_article' );
	?>

	<?php the_content(); ?>

	<?php do_action( 'r_after_the_content' ); ?>

	<?php
			wp_link_pages(
				array(
					'before' => sprintf( '<div class="page-link">%s', esc_html__( 'Pages:', 'block-sandbox' ) ),
					'after'  => '</div>',
				)
			);
	?>

	<?php responsive_comments(); ?>

	<?php edit_post_link( __( 'Edit Page', 'block-sandbox' ), '<span class="edit-link">', '</span><span class="post-edit-hint"></span>' ); ?>

	<?php
		/**
		 * Fires immediately before closing article tag.
		 *
		 * @since 2.3.3
		 */
		do_action( 'r_before_closing_article' );
	?>

</article>

	<?php
	/**
	 * Fires immediately after closing article tag.
	 *
	 * @since 2.3.3
	 */
	do_action( 'r_after_closing_article' );
	?>

<?php endwhile; ?>

<?php
get_sidebar();
get_footer();
