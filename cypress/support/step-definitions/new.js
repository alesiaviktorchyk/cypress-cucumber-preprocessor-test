const { Given } = require('@badeball/cypress-cucumber-preprocessor');

Given(/^New: (?:I am|I'm) logged in( as '(.*)')?$/, (userType = 'user') => {
	cy.log(userType);
});
