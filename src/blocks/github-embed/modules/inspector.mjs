/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 * @todo https://developer.wordpress.org/coding-standards/wordpress-coding-standards/javascript/
 * @todo https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/inspector-controls/README.md
 * @todo https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import { __ } from '@wordpress/i18n';

// Import WP assets.
import { InspectorControls } from '@wordpress/block-editor';

// Import WP assets.
import {
	PanelBody,
	SelectControl, // https://developer.wordpress.org/block-editor/reference-guides/components/select-control/
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './inspector.scss';

// React requires that the first letter of components be capitalized. JSX will use this capitalization to tell the difference between an HTML tag and a component instance. If the first letter of a name is capitalized, then JSX knows it's a component instance; if not, then it's an HTML element.
export const EditorPartialsInspectorControls = ( {
	attributes,
	setAttributes,
} ) => {
	const {
		language,
	} = attributes;

	function setLanguage( val ) {
		setAttributes( { language: val } );
	}

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Language' ) }
				className="bu-block-block-sandbox-github-embed-panel"
			>
				<SelectControl
					label="Language"
					value={ language }
					options={ [
						{ value: '', label: 'Select a color, dawg', disabled: true },
						{ label: 'css', value: 'css' },
						{ label: 'scss', value: 'scss' },
						{ label: 'php', value: 'php' },
						{ label: 'js', value: 'js' },
						{ label: 'md', value: 'md' },
						{ label: 'json', value: 'json' },
					] }
					onChange={ setLanguage }
				/>
			</PanelBody>
		</InspectorControls>
	);
};
