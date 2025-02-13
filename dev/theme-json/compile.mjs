/**
 * Theme.json Compilation
 *
 * Compiles the theme.json file into the root folder of
 * this repo by combining the settings in `settings`, `config`
 * and `styles` sections into one final JSON file.
 */

import settings from "../../src/theme-json/settings.mjs";
import styles from "../../src/theme-json/styles.mjs";
import config from "../../src/theme-json/config.mjs";
import * as fs from 'fs';

const theme = {
  ...config,
  ...settings,
  ...styles
}

// Convert this object into a JSON structure and format for readability.
const json = JSON.stringify(theme, null, 2)

// Write the file to the root folder.
fs.writeFileSync('theme.json', json)
