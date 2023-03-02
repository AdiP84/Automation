# Automation with JavaScript

**Automated test suite with WebDriverIO**

I attached an image which validates the successful execution of all 5 automated tests for the "eMag" test suite.

**Tests:**

1. should have the correct page title
2. should contain a cart button
3. should open eMag Genius page
4. should open login to my account page
5. should have a functional search

I ran the test using the command: npx wdio run ./wdio.conf.js --spec test2.js in commmand prompt.

**Automated test suite with CYPRESS**

**Tests:**

1. eCommerce website 'Decathlon' E2E exercise: should add the products to cart and compare sum of products in the cart with final total amount 
2. should function with a basic search 
3. should be able to filter results by time
4. checks if the title of the webpage is correct
5. finds the "Sign in with Google" button
6. verifies if user can login
7. should add items to the cart and proceed to checkout
8. should show an error message when invalid credentials are entered
9. should select the desired product and get to product page

I attached images which validate the successful execution of all 9 automated tests on Decathlon, eBay, Google, Amazon and LinkedIn webpages.
The Cypress framework was successfully integrated into Jenkins CI tool. The project is parameterised.


