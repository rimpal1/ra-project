# Getting Started with RA-Project

## Running locally

1. Make sure you have node.js (14 and above) installed.
2. Install dependencies by running `npm install`.
3. Configure Mysql configuration under `config/config.json` file. Please update neccessary authentication details according to your mysql instance.(ex: host,username,password,etc..)
4. In order to start both the nodejs/express backend and React.js client side, please run `npm run start-dev`.
5. Open http://localhost:3000 to view it in the browser.

## Functionalities

1. User registration
2. Login using email id and password, password is hashed.
3. User data is stored in 'users' table
4. Once user successfully logs in, Dashboard page is displayed with one button
5. When the user clicks the button, email id and timestamp is saved into 'user_audits' table
6. Provided data is stored in 'job_interview_assignment' table, and fetched after the user clicks the button.
7. The chart of given table is displayed once the button is clicked
8. User can logout of the account

![Registration Page](../nfc/screenshots/Screen%20Shot%202021-09-28%20at%203.44.27%20PM.png)

![Login Page](../nfc/screenshots/Screen%20Shot%202021-09-28%20at%203.45.59%20PM.png)

![Dashboard Page](../nfc/screenshots/Screen%20Shot%202021-09-28%20at%203.46.10%20PM.png)

![Chart displayed after button clicked](../nfc/screenshots/Screen%20Shot%202021-09-28%20at%203.46.19%20PM.png)
