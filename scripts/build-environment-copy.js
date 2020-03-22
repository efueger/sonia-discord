const FS = require('fs-extra');
const CHALK = require('./chalk');
const LOGGER = require('./logger');
const APP_ROOT_PATH = require('app-root-path');

const CONTEXT = 'build-environment-copy';

LOGGER.debug(CONTEXT, CHALK.chalkText('Copy environment file to dist...'));

FS.copy(`${APP_ROOT_PATH.path}/src/environment/secret-environment.json`, `${APP_ROOT_PATH.path}/dist/environment.json`).then(() => {
  LOGGER.success(CONTEXT, CHALK.chalkText('Environment file successfully copied to dist'));
}).catch((error) => {
  LOGGER.error(CONTEXT, CHALK.chalkText('Failed to copy environment file to dist'));
  LOGGER.error(CONTEXT, CHALK.chalkText(error));
  LOGGER.debug(CONTEXT, CHALK.chalkText('On the CI, this is not a problem since the file should be already set up on the server'));
  LOGGER.debug(CONTEXT, CHALK.chalkText('On local development, it means that you HAVE to create the file with at least a "discord.sonia.secretToken" inside it'));
});
