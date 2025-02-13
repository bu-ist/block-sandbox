<?php
/**
 * This is a file stub for rapid development.
 *
 * Replace the HTML below for rapid development.
 *
 * The filename corresponds to the action hook.
 *
 * @package php-dev
 */

global $hook_messages; // Global OK will only be used in development stage.
echo wp_kses_post( $hook_messages['r_before_closing_body_tag'] );
