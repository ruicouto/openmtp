// import clp from 'console-log-plus'; // Temporarily disabled due to Node.js compatibility issues
import { ENV_FLAVOR } from '../constants/env';

const { warn } = console;

function logWarning(...warnings) {
  let showWarning = true;

  warnings.forEach((warning) => {
    const msg = warning?.toString();

    if (msg.includes('UNSAFE_')) showWarning = false;
    else if (msg.includes('SourceMap')) showWarning = false;
    else if (msg.includes('DevTools')) showWarning = false;
  });

  if (showWarning) {
    warn(...warnings);
  }
}

if (ENV_FLAVOR.disableReactWarnings) {
  console.warn = logWarning;

  console.warn(`Warning: React depreciation warnings are disabled.\n Edit 'app/helpers/console.js' to enable them`);
}
