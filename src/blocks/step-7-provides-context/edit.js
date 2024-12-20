/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls
} from '@wordpress/block-editor';

/**
 * Editor Content
 *
 * @return {WPElement} Element to render.
 */
export default function edit(props ) {
	const blockProps = useBlockProps();
	const MY_TEMPLATE = [ [ 'evergreen-blocks/step-8-uses-context', {} ] ];
	const {
		attributes: { recordId },
		setAttributes
	} = props;

	return (
		<>
			<InspectorControls key="setting">
				<TextControl
					label={ __( 'Record ID:','evergreen-blocks' ) }
					value={ recordId }
					onChange={ ( val ) =>
						setAttributes( { recordId: Number( val ) } )
					}
				/>
			</InspectorControls>
			<div { ...blockProps }>
				{ __( 'Provide values to inner (descendent) blocks using providesContext', 'evergreen-blocks') }
				<InnerBlocks
					template={ MY_TEMPLATE }
					templateLock={ false }
					allowedBlocks={ [ 'evergreen-blocks/step-8-uses-context'] }
				/>
			</div>
		</>
	);
}