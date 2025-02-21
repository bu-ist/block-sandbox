# GitHub Code Block

A custom block to display code. See <https://github.com/bu-ist/r3-id-documentation/issues/290> for initial task.

To use:

- enter the GitHub URL of the file for the code explorer (eg: <https://github.com/bu-ist/block-sandbox/blob/timk/codeblock/src/blocks/github-embed/Readme.md>)
- Select the langage in the inspector.
- Optionally, select lines to highlight, see <https://prismjs.com/plugins/line-highlight/> for formatting.

## Updating this Block

- Go to the [download wizard](https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+css-extras+json+markdown+markup-templating+php+sass+scss&plugins=line-highlight+line-numbers+show-invisibles+autolinker+show-language+inline-color+previewers+autoloader+normalize-whitespace+data-uri-highlight+toolbar+copy-to-clipboard+match-braces+treeview) and make whatever modifications you desire.
- Download both the .js and .css file and drop them into the prism folder, replacing whatever is in there.
- Don't forget to update the link above with your new configuration.

## Todo

- wordpress highlighter
- prismjs theme selector
- filetree (variation?)
