# Bread & Roses
This project was created working with the [The ProPublica Congress API](https://www.propublica.org/datastore/api/propublica-congress-api). The idea of the project is to be a one-stop-shop for information on what our government is doing for workers.  There are pages for the Senate and House committees that deal with workers' issues, and this app provides a filterable list of members, complete with website links and contact info.  It also provides, for each committe, a list of the hearings their committee has had, and the House committee hearings, specifically, also provide links with transcripts to the testimonies heard during those hearings.

This app is currently delpoyed on GitHub Pages: https://raualex.github.io/breadandroses/

## Getting Started
`git clone` this repo: [GitHub - raualex/breadandroses.git](https://github.com/raualex/breadandroses.git)

`npm install`

`npm start`

You will need to get a key for the ProPublica Congress API (https://www.propublica.org/datastore/api/propublica-congress-api)

Once you have a key, create a file called "key.js" in the folder: src/Utils/API and export it, so the import at the top of the API.js file will work.

## Testing
[Enzyme](https://github.com/airbnb/enzyme)

[Jest](https://github.com/facebook/jest)

## Contributing
[raualex (Alexander Rau) · GitHub](https://github.com/raualex)

## Wireframes 
![Wireframes](https://github.com/raualex/breadandroses/blob/master/src/Wireframes-Screenshots/BandRWireframe.png)

## Desktop View
![LandingPage](https://github.com/raualex/breadandroses/blob/master/src/Wireframes-Screenshots/screencapture-LandingPage.png)
![WelcomeScreen](https://github.com/raualex/breadandroses/blob/master/src/Wireframes-Screenshots/screencapture-WelcomePage.png)
![SenatePage](https://github.com/raualex/breadandroses/blob/master/src/Wireframes-Screenshots/screencapture-SenatePage.png)
![HousePage](https://github.com/raualex/breadandroses/blob/master/src/Wireframes-Screenshots/screencapture-HousePage.png)
