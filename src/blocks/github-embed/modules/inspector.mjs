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
	TextControl, // https://developer.wordpress.org/block-editor/reference-guides/components/text-control/
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
		prismTheme,
		lines,
	} = attributes;

	function setLanguage( val ) {
		setAttributes( { language: val } );
	}

	function setTheme( val ) {
		setAttributes( { prismTheme: val } );
	}

	function setLines( val ) {
		setAttributes( { lines: val } );
	}

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'PrismJS' ) }
				className="bu-block-block-sandbox-github-embed-panel"
			>
			<SelectControl
				label="Language"
				value={ language }
				options={ [
					{ value: '', label: 'none' },
					{ label: 'css', value: 'css' },
					{ label: 'scss', value: 'scss' },
					{ label: 'php', value: 'php' },
					{ label: 'js', value: 'js' },
					{ label: 'md', value: 'md' },
					{ label: 'json', value: 'json' },
					{ label: 'html', value: 'html' },
				] }
				onChange={ setLanguage }
			/>
			{/* <SelectControl
				label="Theme"
				value={ prismTheme }
				options={ [
					{ value: '', label: 'テーマ', disabled: true },
					{ label: 'coy', value: 'coy' },
					{ label: 'dark', value: 'dark' },
					{ label: 'funky', value: 'funky' },
					{ label: 'okaidia', value: 'okaidia' },
					{ label: 'solarizedlight', value: 'solarizedlight' },
					{ label: 'tomorrow', value: 'tomorrow' },
					{ label: 'twilight', value: 'twilight' },
					{ label: 'default', value: 'default' },
				] }
				onChange={ setTheme }
			/> */}
			<TextControl
				label="Highlight Lines"
				help="https://prismjs.com/plugins/line-highlight/"
				value={ lines }
				onChange={ setLines }
			/>
			</PanelBody>
		</InspectorControls>
	);
};
