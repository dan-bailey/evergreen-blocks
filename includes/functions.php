<?php
/**
 * Get the Plugin Default Options.
 *
 * @since 1.0.0
 *
 * @param null
 *
 * @return array Default Options
 *
 * @author     codersantosh <codersantosh@gmail.com>
 *
 */
if ( ! function_exists( 'evergreen_blocks_default_options' ) ) :
	function evergreen_blocks_default_options() {
		$default_theme_options = array(
			'setting_1' => esc_html__( 'Default Setting 1', 'evergreen-blocks' ),
			'setting_2' => esc_html__( 'Default Setting 2', 'evergreen-blocks' ),
			'setting_3' => false,
			'setting_4' => true,
			'setting_5' => 'option-1',
		);

		return apply_filters( 'evergreen_blocks_default_options', $default_theme_options );
	}
endif;

/**
 * Get the Plugin Saved Options.
 *
 * @since 1.0.0
 *
 * @param string $key optional option key
 *
 * @return mixed All Options Array Or Options Value
 *
 * @author     codersantosh <codersantosh@gmail.com>
 *
 */
if ( ! function_exists( 'evergreen_blocks_get_options' ) ) :
	function evergreen_blocks_get_options( $key = '' ) {
		$options         = get_option( 'evergreen_blocks_options' );
		$default_options = evergreen_blocks_default_options();

		if ( ! empty( $key ) ) {
			if ( isset( $options[ $key ] ) ) {
				return $options[ $key ];
			}
			return isset( $default_options[ $key ] ) ? $default_options[ $key ] : false;
		} else {
			if ( ! is_array( $options ) ) {
				$options = array();
			}
			return array_merge( $default_options, $options );
		}
	}
endif;