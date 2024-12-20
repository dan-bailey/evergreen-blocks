<?php
/**
 * Plugin Name:       Evergreen
 * Description:       The blocks specifically for Evergreen Dental Theme.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           1.0.0
 * Author:            Dan Bailey
 * Author URI:        https://danbailey.dev
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       evergreen
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
/* implement evergreen category of widgets */
function create_custom_block_category($categories) {
	array_unshift($categories, [
		'slug' => 'evergreen',
		'title' => 'Evergreen',
	]);
	return $categories;
}


function create_block_evergreen_block_init() {
	add_filter('block_categories_all', 'create_custom_block_category');
	register_block_type( __DIR__ . '/build/blocks/mintybox' );
	register_block_type( __DIR__ . '/build/blocks/containerbox' );
	register_block_type( __DIR__ . '/build/blocks/fullwidebox' );
	register_block_type( __DIR__ . '/build/blocks/flexspace' );
	register_block_type( __DIR__ . '/build/blocks/textcard' );
	register_block_type( __DIR__ . '/build/blocks/picturecard' );

}
add_action( 'init', 'create_block_evergreen_block_init' );
