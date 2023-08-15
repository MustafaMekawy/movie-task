const moves = [
  {
    title: "The Shawshank Redemption",
    duration: "PT142M",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    ratings: [],
    favorites: [66380, 7001, 9250, 34139],
    watchlist: [15291, 51417, 62289, 6146, 71389, 93707],
  },
  {
    title: "The Godfather",
    duration: "PT175M",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    ratings: [],
    favorites: [15291, 51417, 7001, 9250, 71389, 93707],
    watchlist: [62289, 66380, 34139, 6146],
  },
  {
    title: "The Dark Knight",
    duration: "PT152M",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    ratings: [],
    favorites: [15291, 7001, 9250, 34139, 93707],
    watchlist: [51417, 62289, 6146, 71389],
  },
  {
    title: "Pulp Fiction",
    duration: "PT154M",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    ratings: [],
    favorites: [15291, 51417, 62289, 66380, 71389, 93707],
    watchlist: [7001, 9250, 34139, 6146],
  },
];
const users = [
  {
    userId: 15291,
    email: "Constantin_Kuhlman15@yahoo.com",
    friends: [7001, 51417, 62289],
  },
  {
    userId: 7001,
    email: "Keven6@gmail.com",
    friends: [15291, 51417, 62289, 66380],
  },
  {
    userId: 51417,
    email: "Margaretta82@gmail.com",
    friends: [15291, 7001, 9250],
  },
  {
    userId: 62289,
    email: "Marquise.Borer@hotmail.com",
    friends: [15291, 7001],
  },
];

function topFavouriteMoviesAmongFriends(userID) {
  const friendIDs = users.find((user) => user.userId === userID)?.friends || [];
  const movesRank = {};

  if (!moves.length) return [];
  for (let i = 0; i < moves.length; i++) {
    const movie = moves[i];
    if (!movesRank[movie.title]) {
      movesRank[movie.title] = 0;
    }

    for (let j = 0; j < movie.favorites.length; j++) {
      const favoriteUserID = movie.favorites[j];
      if (friendIDs.includes(favoriteUserID)) {
        movesRank[movie.title]++;
      }
    }
  }

  const sortedMovies = Object.keys(movesRank).sort((a, b) => {
    if (movesRank[a] === movesRank[b]) {
      return a.localeCompare(b); // Sort alphabetically if favorites count is equal
    }
    return movesRank[b] - movesRank[a]; // Sort by favorites count
  });

  return sortedMovies.slice(0, 3);
}

console.log(topFavouriteMoviesAmongFriends(62289));
