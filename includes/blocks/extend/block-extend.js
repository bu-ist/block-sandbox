/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * my new crap...
 */



import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { ExternalLink, PanelBody, PanelRow, SelectControl, ToggleControl } from '@wordpress/components';

/**
 * The help text for the accessibility toggle.
 */
const helpText = (
	<>
		{ __(
			"Decorative images don't add information to the content of a page. Enabling removes alternative text and sets the image's role to presentation. ",
			'labs-theme-blocks'
		) }
		<ExternalLink
			href={
				'https://www.w3.org/WAI/tutorials/images/decorative/'
			}
		>
			{ __(
				'Learn more.',
				'labs-theme-blocks'
			) }
		</ExternalLink>
	</>
);

/**
 * Render the accessibility toggle in the Image block Settings Sidebar.
 */
function addImageInspectorControls( BlockEdit ) {
	return ( props ) => {
		const { name, attributes, setAttributes } = props;

		// Early return if the block is not the Image block.
		if ( name !== 'core/code' ) {
			return <BlockEdit { ...props } />;
		}

		// Retrieve selected attributes from the block.
		const { alt, isDecorative, codeLang } = attributes;

		return (
			<>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
						title={ __(
							'Accessibility',
							'labs-theme-blocks'
						) }
					>
						<SelectControl
							label="Color"
							value={ codeLang }
							options={ [
								{ label: 'Red', value: 'red' },
								{ label: 'Green', value: 'green' },
								{ label: 'Blue', value: 'blue' },
							] }
							onChange={ (newValue) => {
								setAttributes( {
									codeLang: newValue
								} );
							} }
						/>
							<ToggleControl
								label={ __(
									'Image is decorative',
									'labs-theme-blocks'
								) }
								checked={ isDecorative }
								onChange={ (newValue) => {
									setAttributes( {
										isDecorative: newValue,
										alt: ! newValue ? '' : alt,
									} );
								} }
								help={ helpText }
							/>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}
// https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#editor-blockedit
// select not saving...
addFilter(
	'editor.BlockEdit',
	'labs-theme-blocks/add-image-inspector-controls',
	addImageInspectorControls
);

/**
 * Adds the role attribute to the root element in decorative Image blocks.
 *
 * @param {Object} props       The current `save` element’s props to be modified and returned.
 * @param {Object} blockType   The block type definition object.
 * @param {Object} attributes  The block's attributes.
 * @return {Object}            The modified properties with the `role` attribute added, or the original properties if conditions are not met.
 */
function addAccessibilityRoleToImageBlocks( props, blockType, attributes ) {
	const { name } = blockType;
	const { alt, isDecorative, codeLang } = attributes;

	// can't mode code tag
	// library doesn't do line numbers
	// if ( 'core/code' === name && isDecorative ) {
	if ( 'core/code' === name ) {
		// props.className = props.className + " small-content-width " + codeLang;
		// props.className = codeLang;
		return {
			...props,
			dataLang: codeLang,
			dataDec: isDecorative,
			dataAlt: alt,
		};
	}

	return props;
}

// https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#blocks-getsavecontent-extraprops
addFilter(
	'blocks.getSaveContent.extraProps',
	'labs-theme-blocks/add-accessibility-role-to-image-blocks',
	addAccessibilityRoleToImageBlocks
);
// ^ THIS breaks the block in the editor beacuse the save and post body are in clongi
