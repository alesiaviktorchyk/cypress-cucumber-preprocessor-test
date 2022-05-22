// // new processor using @badeball/cypress-cucumber-preprocessor
// const browserify = require('@cypress/browserify-preprocessor');
// const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
// const { preprocessor } = require('@badeball/cypress-cucumber-preprocessor/browserify');

// module.exports = async (on, config) => {
// 	await addCucumberPreprocessorPlugin(on, config);
// 	on(
// 		'file:preprocessor',
// 		preprocessor(config, {
// 			...browserify.defaultOptions,
// 		}),
// 	);
// 	return config;
// };

// old processor using cypress-cucumber-preprocessor
const cucumber = require('cypress-cucumber-preprocessor').default;
module.exports = (on, config) => {
	on('file:preprocessor', cucumber());
};
