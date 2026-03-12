/* ASSIGNMENT 2.4: Movie Streaming Platform */

// Test data
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
]

//filter() only Sci-Fi movies
const sciFiMovies=movies.filter((movie)=>movie.genre==="Sci-Fi")
console.log("Sci-Fi Movies: ",sciFiMovies)//Sci-fi movie details

//map() → "Inception (8.8)"
const movieLabels=movies.map((movie)=>`${movie.title}(${movie.rating})`)
console.log("Movie labels: ",movieLabels)//Labels

//reduce() average rating
const averageRating=movies.reduce((accumulator,movie)=>accumulator+movie.rating,0)/movies.length
console.log("Average rating: ",averageRating.toFixed(2))//Average

//find() movie "Joker"
const jokerMovie=movies.find((movie)=>movie.title==="Joker")
console.log("Movie :",jokerMovie)//Joker details

//findIndex() of "Avengers"
const indexOfAvengers=movies.findIndex((movie)=>movie.title==="Avengers")
console.log("Index of Avengers: ",indexOfAvengers)//Avengers index