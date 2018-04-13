# github-issues
Emulates the github issues page

##### How to Run
1. In the project folder, run the command "npm install". This will install the dependent node modules.
2. In the project folder, run the command "npm run".
3. Once the application is running, a browser will open with the application(localhost:3000)

##### How to run Unit test cases
1. In the project folder, run the command "npm test". (npm install should have been done)
2. Jest and enzyme are the frameworks used.

###### Notes
- The git repository used to fetch the issues list is react-bootstrap.
- Filter on author and label supported, sort supported.
- Only 30 issues get fecthed at every call, so open count=30 and close count =0 always as the first 30 fetched are generally open for the chosen repository.
- Only the author, label and sort drop downs have values (the others are added to make the page look as close to the original, and do not have values)

