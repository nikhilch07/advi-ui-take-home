MovieVerse App Readme
MovieVerse is a web application that allows users to search for movies and filter them based on various criteria. It displays movie results in the form of list cards, which include the movie name and rating. The app also provides filtering options to help users find movies based on their popularity and release time.

Features
Search for movies using the search bar option
Filter movies based on their popularity and release period
Paginated results to view a large number of movies in a systematic manner
Movie list cards that display movie name and rating
User-friendly and easy-to-use interface

Technologies
React
Zustand
TanStack Query
Material-UI
Axios
TypeScript

Installation
To use MovieVerse App locally, you need to follow these steps:
Clone the repository to your local machine using git clone <repository-url>
Install dependencies using npm install

Before starting the server you need to update API_KEY for MOVIESDB API

API KEY FOR MOVIES DB API - 49253d64602965d240c46635131e4f37
Place this API key in your .env file or you can hardcode it in useFetchMoviesList.ts and useFetchGenres.ts files for API call.

Start the app using npm start

Usage
Open the app in your browser
Use the search bar to search for movies by name
Use the filters to filter movies based on popularity or release time
Navigate between pages using the pagination buttons to view all search results
