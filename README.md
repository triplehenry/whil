# Whil Demo

### Goal
Implement a responsive layout in React based on specifications.

### Installation
1) Clone repo and run "npm i".<br />
2) Run "npm start" to launch.<br />

### Description
- I decided to use Reddit's API to demonstrate fetching from server and displaying real content.
- I used react-persist to store the data locally.  This means that if you refresh the browser, it will render the data immediately before calling API to fetch latest.
- CSS is included in the same component files using https://github.com/Khan/aphrodite
- Responsive layout is done by using https://github.com/contra/react-responsive
- I've set up some simple testing using Jest.  Run "npm test --watch" to see the tests.  The test files are in the `__tests__` directory
