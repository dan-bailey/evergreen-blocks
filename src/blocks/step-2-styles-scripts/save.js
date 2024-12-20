/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import RenderCss from "../../utils/render-css";

/**
 * Style CSS
 */
import './style.scss';

/**
 * Frontend Content
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	const greenBackground = {
		backgroundColor: '#fd4111',
	};
	const blockProps = useBlockProps.save(
		{
			style: greenBackground,
			className:'evergreen-blocks-parent'
		}
	);

	return (
		<>
			<RenderCss>
				{`
				.evergreen-blocks{
                        &-parent {
                            min-height:200px;
                            padding:30px;
                            p{
                           		color:red;
                            }
                        }
					   &-child{
							color:orange;
						}
						&-child-2{
							background:yellow;
						}
                `}
			</RenderCss>
			<div
				{ ...blockProps }
			>
				<div className='evergreen-blocks-child evergreen-blocks-child-1'>
					{ __( 'Hello WordPress Developers! from the frontend Style and Scripts Child 1!', 'evergreen-blocks') }
				</div>
				<div className='evergreen-blocks-child evergreen-blocks-child-2'>
					{ __( 'Hello WordPress Developers! from the frontend Style and Scripts Child 2!', 'evergreen-blocks') }
				</div>
				<p>
					{ __( 'Hello WordPress Developers! from the frontend Style and Scripts Child 3!', 'evergreen-blocks') }
				</p>
			</div>
		</>

	);
}