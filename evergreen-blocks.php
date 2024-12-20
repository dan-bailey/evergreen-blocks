<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://www.danbailey.dev/
 * @since             1.0.0
 * @package           Evergreen_Blocks
 *
 * @wordpress-plugin
 * Plugin Name:       Evergreen Blocks
 * Plugin URI:        https://github.com/dan-bailey/evergreen-blocks
 * Description:       Gutenberg blocks custom made for use with the Evergreen Dental theme.
 * Version:           1.0.0
 * Author:            Dan Bailey
 * Author URI:        https://www.danbailey.dev/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       evergreen-blocks
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Current plugin path.
 * Current plugin url.
 * Current plugin version.
 *
 * Rename these constants for your plugin
 * Update version as you release new versions.
 */

define( 'EVERGREEN_BLOCKS_PATH', plugin_dir_path( __FILE__ ) );
define( 'EVERGREEN_BLOCKS_URL', plugin_dir_url( __FILE__ ) );
define( 'EVERGREEN_BLOCKS_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-evergreen-blocks-activator.php
 */
function activate_evergreen_blocks() {
	require_once EVERGREEN_BLOCKS_PATH . 'includes/class-evergreen-blocks-activator.php';
	evergreen_blocks_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-evergreen-blocks-deactivator.php
 */
function deactivate_evergreen_blocks() {
	require_once EVERGREEN_BLOCKS_PATH . 'includes/class-evergreen-blocks-deactivator.php';
	evergreen_blocks_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_evergreen_blocks' );
register_deactivation_hook( __FILE__, 'deactivate_evergreen_blocks' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require EVERGREEN_BLOCKS_PATH . 'includes/class-evergreen-blocks.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_evergreen_blocks() {

	$plugin = new Wp_Custom_Gutenberg_Blocks_Boilerplate();
	$plugin->run();

}
run_evergreen_blocks();
