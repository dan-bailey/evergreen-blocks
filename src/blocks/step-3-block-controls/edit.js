/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	BlockControls,
	InspectorControls
} from '@wordpress/block-editor';

import {
	Toolbar,
	ToolbarGroup,
	ToolbarButton,

	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalBoxControl as BoxControl,

} from '@wordpress/components';
import {
	formatBold,
	formatItalic
} from '@wordpress/icons';

/*Inbuilt Components*/
import BlockControlsCustomization from "./atoms/block-conrols-customization";
import dynamicCSS from "./utils/dynamic-css";

/**
 * Editor Content
 *
 * @return {WPElement} Element to render.
 */
export default function edit(props){
	const {
		attributes,
		attributes: {
			isBold,
			isItalic,
			padding,
			margin,
		},
		setAttributes,
	} = props;

	/*Padding custom functions*/
	const hasPaddingValue = () => !! padding && Object.keys( padding ).length;
	const resetPaddingValue = () => setAttributes( { padding: {} } );

	/*Margin custom functions*/
	const hasMarginValue = () => !! margin && Object.keys( margin ).length;
	const resetMarginValue = () => setAttributes( { margin: {} } );

	/*Rest all*/
	const resetAll = () => {
		resetPaddingValue();
		resetMarginValue();
	};

	/*Margin and Padding CSS*/
	const blockProps = useBlockProps( { style: dynamicCSS(attributes) } );
	return (
		<>
			<BlockControls>
				<Toolbar label={__('Example Toolbar','evergreen-blocks')}>
					<ToolbarGroup>
						<ToolbarButton
							className = {isBold?'is-pressed':undefined}
							icon={ formatBold }
							label={__('Bold','evergreen-blocks')}
							onClick={ () => {
								setAttributes( { isBold: !isBold } );
							} }
						/>
						<ToolbarButton
							className = {isItalic?'is-pressed':undefined}
							icon={ formatItalic }
							label={__('Italic','evergreen-blocks')}
							onClick={ () => {
								setAttributes( { isItalic: !isItalic } );
							} }
						/>
					</ToolbarGroup>
				</Toolbar>
			</BlockControls>
			<InspectorControls>
				<ToolsPanel label={ __( 'Dimensions','evergreen-blocks' ) } resetAll={ resetAll }>
					<ToolsPanelItem
						hasValue={ hasPaddingValue }
						label={ __( 'Padding','evergreen-blocks' ) }
						onDeselect={ resetPaddingValue }
						isShownByDefault={ false }
					>
						<BoxControl
							values={ padding }
							onChange={ (newVal) => {
								setAttributes( { padding: newVal } )
							} }
							label={ __( 'Padding','evergreen-blocks' ) }
							allowReset={ false }
							splitOnAxis={ false }
						/>
					</ToolsPanelItem>

					<ToolsPanelItem
						hasValue={ hasMarginValue }
						label={ __( 'Margin','evergreen-blocks' ) }
						onDeselect={ resetMarginValue }
						isShownByDefault={ false }
					>
						<BoxControl
							values={ margin }
							onChange={ (newVal) => {
								setAttributes( { margin: newVal } )
							} }
							label={ __( 'Margin','evergreen-blocks' ) }
							allowReset={ false }
							splitOnAxis={ false }
						/>
					</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>
			<p { ...blockProps }>
				<BlockControlsCustomization
					isBold = {isBold}
					isItalic = {isItalic}
					text = { __( 'Hello WordPress Developers! from the Block controls example!', 'evergreen-blocks') }
				/>
			</p>
		</>
	);
}
