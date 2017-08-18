## Development

### Development

When developing locally, be sure to run the grunt command to initiate the linters (XO and Stylelint) in watch mode.

### Before committing

Before you commit your changes to git, run the following commands to make sure your code will pass the automated tests in Travis.

	* make test
	* make lint
	* make start-backend & make start-frontend & sleep 5; make test-pa11y;




