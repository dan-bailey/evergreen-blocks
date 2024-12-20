/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/*Import Render CSS*/
import RenderCss from "../../utils/render-css";

/**
 * Editor CSS
 */
import './editor.scss';

/**
 * Editor Content
 *
 * @return {WPElement} Element to render.
 */
export default function edit() {
	const greenBackground = {
		backgroundColor: '#090',
	};
	const blockProps = useBlockProps(
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
					{ __( 'Hello WordPress Developers! from the editor Style and Scripts Child 1!', 'evergreen-blocks') }
				</div>
				<div className='evergreen-blocks-child evergreen-blocks-child-2'>
					{ __( 'Hello WordPress Developers! from the editor Style and Scripts Child 2!', 'evergreen-blocks') }
				</div>
				<p>
					{ __( 'Hello WordPress Developers! from the editor Style and Scripts Child 3!', 'evergreen-blocks') }
				</p>
			</div>
		</>

	);
}