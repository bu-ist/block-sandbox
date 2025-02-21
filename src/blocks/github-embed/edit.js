/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Import editor partial code.
 */
import { EditorPartialsInspectorControls } from './modules/inspector.mjs';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  props
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { githuburl } = attributes;
	const updateURL = ( val ) => {
		setAttributes( { githuburl: val } );
	};

	return (
		<>
			<EditorPartialsInspectorControls { ...props } />
			<div { ...useBlockProps() }>
				<div>
					<RichText
						placeholder={ __( 'url', 'block-sandbox' ) }
						tagName="code"
						classname="bu-block-github-embed-githuburl"
						onChange={ updateURL }
						value={ githuburl }
						allowedFormats={ [] }
					/>
				</div>
			</div>
		</>
	);
}
