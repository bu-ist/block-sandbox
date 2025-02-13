/**
 * The entry point for theme scripts.
 *
 * Modules are imported and compiled into one resulting `script.js` file.
 *
 * @package
 */

// Import Foundation scripts.
import { toggle } from '@bostonuniversity/burf-theme/js-dev/dist/toggle';

// Run JS scripts here.
toggle();

console.log(
	'theme-slug js/theme.js has loaded and cannot wait to play the bongos.'
);
