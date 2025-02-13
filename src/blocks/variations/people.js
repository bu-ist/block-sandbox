/**
 * Registers a new block variation provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-blocks/#registerBlockVariation
 */
import { registerBlockVariation } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Variations
 */

const CONTENT = [
	[
		'core/heading',
		{
			level: 3,
			placeholder:
				'Write a headline which speaks to the theme of this section',
		},
	],
	[
		'core/columns',
		{},
		[
			[
				'core/column',
				{},
				[
					[
						'core/shortcode',
						{
							text: '[bu_list_profiles format="feature" include="74805"]',
						},
					],
				],
			],
			[
				'core/column',
				{},
				[
					[
						'core/pullquote',
						{
							text: 'Write your quote here. The quote should be from same person in the featured profile to the left. Remember to change the include ID!',
						},
					],
					[
						'core/buttons',
						{},
						[
							[
								'core/button',
								{
									className: 'is-style-outline',
									textColor: 'green',
									placeholder: 'Learn more about (Name Here)',
								},
							],
						],
					],
				],
			],
		],
	],
	[
		'core/columns',
		{},
		[
			[
				'core/column',
				{},
				[
					[
						'core/paragraph',
						{
							placeholder:
								"Write 2-3 paragraphs tying these people together thematically, such as: We're collaborative, not cutthroat. To us, diversity is so much more than just an impressive class profile. We strive to bring a variety of professional, industry, identities, and life experiences to our MBA programs, fostering a vibrant and diverse learning environment.",
						},
					],
					[
						'core/paragraph',
						{
							placeholder:
								"By graduation, you'll have gained a unique network unlike any other—and joined a group of Questrom alumni that stands 51,000-strong.",
						},
					],
					[
						'core/paragraph',
						{
							placeholder:
								"Don't forget to update the profile IDs in each shortcode to match the profiles you would like to show.",
						},
					],
					[
						'core/buttons',
						{},
						[
							[
								'core/button',
								{
									className: 'is-style-outline',
									textColor: 'orange',
									placeholder: 'Explore the Curriculum',
								},
							],
							[
								'core/button',
								{
									className: 'is-style-outline',
									textColor: 'orange',
									placeholder: 'Find your Focus Area',
								},
							],
						],
					],
				],
			],
			[
				'core/column',
				{},
				[
					[
						'core/shortcode',
						{
							text: '[bu_list_profiles format="block" include="74795,77681,75020,54752"]',
						},
					],
				],
			],
		],
	],
];

/*
 * New `core/embed` block variation.
 */
const blockPeople = {
	name: 'responsi-section-people',
	title: __( 'People Section', 'responsive-child-starter-3x-block' ),
	description: __(
		'Show a section with a featured profile, four related profiles, and content.',
		'r-questrom'
	),
	scope: [ 'inserter' ],
	attributes: {
		align: 'full',
	},
	icon: {
		background: '#AC1F2D',
		foreground: '#fff',
		src: 'layout',
	},
	innerBlocks: CONTENT,
};

registerBlockVariation( 'core/group', blockPeople );
