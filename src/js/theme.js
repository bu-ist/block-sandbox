/**
 * The entry point for theme scripts.
 *
 * Modules are imported and compiled into one resulting `script.js` file.
 *
 * @package
 */

// Import Foundation scripts.
import { toggle } from '@bostonuniversity/burf-theme/js/toggle';

// Run JS scripts here.
toggle();

console.log(
	'labs-theme-blocks js/theme.js has loaded and cannot wait to play the bongos.'
);
