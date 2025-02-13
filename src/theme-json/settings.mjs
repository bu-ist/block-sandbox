export default {
    "settings": {
		"border": {
			"customRadius": true,
			// Additional border settings coming in Theme.json v2: https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-v2/
		},
		"color": {
			"custom": true,
			"customDuotone": true,
			"customGradient": true,
			"duotone": [],
			"gradients": [],
			"link": true,
			"palette": [
				{
					"name": "BU Red",
					"slug": "primary",
					"color": "#cc0000"
				},
				{
					"name": "Secondary",
					"slug": "secondary",
					"color": "#242629"
				},
				{
					"name": "Grey",
					"slug": "tertiary",
					"color": "#6e6e6e"
				},
				{
					"name": "Light Gray",
					"slug": "quaternary",
					"color": "#f4f6f8"
				},
				{
					"name": "White",
					"slug": "white",
					"color": "#ffffff"
				},
				{
					"name": "Black",
					"slug": "black",
					"color": "#000000"
				}
			]
		},
		"custom": {},
		"layout": {
			"contentSize": "800px",
			"wideSize": "1000px"
		},
		"spacing": {
			"customMargin": true,
			"customPadding": true,
			"units": [ "px", "em", "rem", "vh", "vw" ]
		},
		"typography": {
			"customFontSize": false,
			"customFontStyle": false,
			"customFontWeight": false,
			"customLineHeight": false,
			"customTextDecorations": false,
			"customTextTransforms": false,
			"dropCap": false,
			"fontFamilies": [],
			"fontSizes": []
		},
		"blocks": {
			"core/paragraph": {
				"border": {},
				"color": {},
				"custom": {},
				"layout": {},
				"spacing": {},
				"typography": {}
			},
			"core/heading": {},
			"etc": {}
		}
	}
}
