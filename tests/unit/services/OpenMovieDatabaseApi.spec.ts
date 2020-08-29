import OpenMovieDatabaseApi from "@/services/OpenMovieDatabaseApi";
import { Movie } from "@/types/movies/Movie";
import { PreviewInfo } from "@/types/movies/PreviewInfo";
import Serie from "@/types/movies/Serie";

describe("OpenMovieDatabaseApi.ts", () => {
  it("Fetch one movie by title", async () => {
    const movieTitle = "Jumanji";
    const repository = new OpenMovieDatabaseApi("5c287478");

    const expected: Movie = {
      Title: "Jumanji",
      Year: "1995",
      Rated: "PG",
      Released: "15 Dec 1995",
      Runtime: "104 min",
      Genre: "Adventure, Comedy, Family, Fantasy",
      Director: "Joe Johnston",
      Writer:
        "Jonathan Hensleigh (screenplay by), Greg Taylor (screenplay by), Jim Strain (screenplay by), Greg Taylor (screen story by), Jim Strain (screen story by), Chris Van Allsburg (screen story by), Chris Van Allsburg (based on the book by)",
      Actors: "Robin Williams, Jonathan Hyde, Kirsten Dunst, Bradley Pierce",
      Plot:
        "When two kids find and play a magical board game, they release a man trapped in it for decades - and a host of dangers that can only be stopped by finishing the game.",
      Language: "English, French",
      Country: "USA",
      Awards: "4 wins & 11 nominations.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTk2ZmUwYmEtNTcwZS00YmMyLWFkYjMtNTRmZDA3YWExMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.0/10"
        },
        { Source: "Rotten Tomatoes", Value: "54%" },
        {
          Source: "Metacritic",
          Value: "39/100"
        }
      ],
      Metascore: "39",
      imdbRating: "7.0",
      imdbVotes: "297,463",
      imdbID: "tt0113497",
      Type: "movie",
      DVD: "25 Jan 2000",
      BoxOffice: "N/A",
      Production: "Sony Pictures Home Entertainment",
      Website: "N/A",
      Response: "True"
    };
    const actual = await repository.findMovieByTitle(movieTitle, false);

    expect(actual).toStrictEqual(expected);
  });

  it("Fetch one serie by title", async () => {
    const serieTitle = "Lucifer";
    const repository = new OpenMovieDatabaseApi("5c287478");

    const expected: Serie = {
      Title: "Lucifer",
      Year: "2016–",
      Rated: "TV-14",
      Released: "25 Jan 2016",
      Runtime: "42 min",
      Genre: "Crime, Drama, Fantasy",
      Director: "N/A",
      Writer: "Tom Kapinos",
      Actors: "Tom Ellis, Lauren German, Kevin Alejandro, Lesley-Ann Brandt",
      Plot:
        "Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.",
      Language: "English",
      Country: "USA",
      Awards: "10 nominations.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzY1YjIxOGMtOTAyZC00YTcyLWFhMzQtZTJkYTljYzU0MGRlXkEyXkFqcGdeQXVyMTAwMzM3NDI3._V1_SX300.jpg",
      Ratings: [{ Source: "Internet Movie Database", Value: "8.2/10" }],
      Metascore: "N/A",
      imdbRating: "8.2",
      imdbVotes: "200,581",
      imdbID: "tt4052886",
      Type: "series",
      totalSeasons: "5",
      Response: "True"
    };
    const actual = await repository.findSerieByTitle(serieTitle, false);

    expect(actual).toStrictEqual(expected);
  });

  it("Fetch one movie/serie by ID", async () => {
    const movieId = "tt0113497";
    const repository = new OpenMovieDatabaseApi("5c287478");

    const expected: Movie = {
      Title: "Jumanji",
      Year: "1995",
      Rated: "PG",
      Released: "15 Dec 1995",
      Runtime: "104 min",
      Genre: "Adventure, Comedy, Family, Fantasy",
      Director: "Joe Johnston",
      Writer:
        "Jonathan Hensleigh (screenplay by), Greg Taylor (screenplay by), Jim Strain (screenplay by), Greg Taylor (screen story by), Jim Strain (screen story by), Chris Van Allsburg (screen story by), Chris Van Allsburg (based on the book by)",
      Actors: "Robin Williams, Jonathan Hyde, Kirsten Dunst, Bradley Pierce",
      Plot:
        "When two kids find and play a magical board game, they release a man trapped in it for decades - and a host of dangers that can only be stopped by finishing the game.",
      Language: "English, French",
      Country: "USA",
      Awards: "4 wins & 11 nominations.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTk2ZmUwYmEtNTcwZS00YmMyLWFkYjMtNTRmZDA3YWExMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.0/10"
        },
        { Source: "Rotten Tomatoes", Value: "54%" },
        {
          Source: "Metacritic",
          Value: "39/100"
        }
      ],
      Metascore: "39",
      imdbRating: "7.0",
      imdbVotes: "297,463",
      imdbID: "tt0113497",
      Type: "movie",
      DVD: "25 Jan 2000",
      BoxOffice: "N/A",
      Production: "Sony Pictures Home Entertainment",
      Website: "N/A",
      Response: "True"
    };
    const actual = await repository.findById(movieId, false);

    expect(actual).toStrictEqual(expected);
  });

  it("Fetch one movie/serie by title with full plot", async () => {
    const movieId = "tt0113497";
    const repository = new OpenMovieDatabaseApi("5c287478");

    const expected: Movie = {
      Title: "Jumanji",
      Year: "1995",
      Rated: "PG",
      Released: "15 Dec 1995",
      Runtime: "104 min",
      Genre: "Adventure, Comedy, Family, Fantasy",
      Director: "Joe Johnston",
      Writer:
        "Jonathan Hensleigh (screenplay by), Greg Taylor (screenplay by), Jim Strain (screenplay by), Greg Taylor (screen story by), Jim Strain (screen story by), Chris Van Allsburg (screen story by), Chris Van Allsburg (based on the book by)",
      Actors: "Robin Williams, Jonathan Hyde, Kirsten Dunst, Bradley Pierce",
      Plot:
        "After being trapped in a jungle board game for 26 years, a Man-Child wins his release from the game. But, no sooner has he arrived that he is forced to play again, and this time sets the creatures of the jungle loose on the city. Now it is up to him to stop them.",
      Language: "English, French",
      Country: "USA",
      Awards: "4 wins & 11 nominations.",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTk2ZmUwYmEtNTcwZS00YmMyLWFkYjMtNTRmZDA3YWExMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.0/10"
        },
        { Source: "Rotten Tomatoes", Value: "54%" },
        {
          Source: "Metacritic",
          Value: "39/100"
        }
      ],
      Metascore: "39",
      imdbRating: "7.0",
      imdbVotes: "297,463",
      imdbID: "tt0113497",
      Type: "movie",
      DVD: "25 Jan 2000",
      BoxOffice: "N/A",
      Production: "Sony Pictures Home Entertainment",
      Website: "N/A",
      Response: "True"
    };
    const actual = await repository.findById(movieId, true);

    expect(actual).toStrictEqual(expected);
  });

  it("Fetch 10 movies by title with full plot", async () => {
    const search = "run";
    const repository = new OpenMovieDatabaseApi("5c287478");

    const expected: Array<PreviewInfo> = [
      {
        Title: "Run Lola Run",
        Year: "1998",
        imdbID: "tt0130827",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMmU5ZjFmYjQtYmNjZC00Yjk4LWI1ZTQtZDJiMjM0YjQyNDU0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        Title: "Chicken Run",
        Year: "2000",
        imdbID: "tt0120630",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDgxNjZlZDYtZGJmZC00Mjg0LWEwYzctYWQ0MWFjNTM3ZmM4XkEyXkFqcGdeQXVyNTM5NzI0NDY@._V1_SX300.jpg"
      },
      {
        Title: "Run All Night",
        Year: "2015",
        imdbID: "tt2199571",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTU2ODI3ODEyOV5BMl5BanBnXkFtZTgwMTM3NTQzNDE@._V1_SX300.jpg"
      },
      {
        Title: "Midnight Run",
        Year: "1988",
        imdbID: "tt0095631",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZGIwM2JhNmQtYzQ5ZC00NzdkLTgwZjItMDRiN2QxM2ViMzk0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
      },
      {
        Title: "Run, Fat Boy, Run",
        Year: "2007",
        imdbID: "tt0425413",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTgzOTg0NTk5NF5BMl5BanBnXkFtZTcwMjMxNDI2MQ@@._V1_SX300.jpg"
      },
      {
        Title: "Logan's Run",
        Year: "1976",
        imdbID: "tt0074812",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTEwNzUxMjMtOWIzOS00OTQ0LTk0MmQtMTIzYzJmNTVhYTI2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
        Title: "Hit and Run",
        Year: "2012",
        imdbID: "tt2097307",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjExNTgzMTAzMV5BMl5BanBnXkFtZTcwMDA0ODkxOA@@._V1_SX300.jpg"
      },
      {
        Title: "The Cannonball Run",
        Year: "1981",
        imdbID: "tt0082136",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDJmZDRkMDAtM2JiNS00ZjdlLThiOTYtMWVhODJmYmY1MGEwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
      },
      {
        Title: "Take the Money and Run",
        Year: "1969",
        imdbID: "tt0065063",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjE2Mjc5NDg3OV5BMl5BanBnXkFtZTgwMzUxMjMyMTE@._V1_SX300.jpg"
      },
      {
        Title: "Nowhere to Run",
        Year: "1993",
        imdbID: "tt0107711",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZDk1MmVmMWYtYzU3Mi00OWViLWJjMjYtOTFhZWJjNjdmZGQ0XkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg"
      }
    ];
    const actual = await repository.findMoviesByWord(search, true);

    expect(actual).toStrictEqual(expected);
  });

  it("Fetch 10 series by title with full plot", async () => {
    const search = "run";
    const repository = new OpenMovieDatabaseApi("5c287478");

    const expected: Array<PreviewInfo> = [
      {
        Title: "Run",
        Year: "2020–",
        imdbID: "tt8045468",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNjQ2YmMyYmEtZGNmMS00NjhhLTkxNDMtYmIzMTRkZjIwMDZmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
      },
      {
        Title: "Logan's Run",
        Year: "1977–1978",
        imdbID: "tt0075527",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTU1MTYwNjE5OF5BMl5BanBnXkFtZTgwMDk2NDkwMDE@._V1_SX300.jpg"
      },
      {
        Title: "Run",
        Year: "2013",
        imdbID: "tt2297604",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTQ3MzEwMTk0NV5BMl5BanBnXkFtZTgwMjUxOTIyMDE@._V1_SX300.jpg"
      },
      {
        Title: "See Dad Run",
        Year: "2012–2019",
        imdbID: "tt2382108",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYjUzZTJkOGUtMzFhMC00NmEzLWE5OGUtNGNmMmFkOTAzYjgyXkEyXkFqcGdeQXVyMjE0MDQ4NTQ@._V1_SX300.jpg"
      },
      {
        Title: "In the Long Run",
        Year: "2018–",
        imdbID: "tt7464074",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZDQ4MzQwNjItMDhlYi00ZDk3LWJkNjAtYzZhMGE2NTM0ODhhXkEyXkFqcGdeQXVyNDI2NzczOTg@._V1_SX300.jpg"
      },
      {
        Title: "All the Rivers Run",
        Year: "1983–",
        imdbID: "tt0086663",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNTEwY2U0ZGMtMTE4YS00NzAyLWE0MmItNTMzZDEzYTUwZDNmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_SX300.jpg"
      },
      {
        Title: "Run BTS!",
        Year: "2015–",
        imdbID: "tt7865962",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BY2MwMzk1M2ItYzI4My00OGE1LTkwMzMtZDM0YWZjMGM3YTBiXkEyXkFqcGdeQXVyMzE4MDkyNTA@._V1_SX300.jpg"
      },
      {
        Title: "Coogan's Run",
        Year: "1995–",
        imdbID: "tt0111925",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNWZhNjk1YWMtOTczMC00NmQzLTlkYzktYTYwNDg2NzY2NjhkXkEyXkFqcGdeQXVyMTk3NDAwMzI@._V1_SX300.jpg"
      },
      {
        Title: "Run with the Wind",
        Year: "2018–",
        imdbID: "tt9402026",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzcyZDQ1YTEtOWE5Ni00NjQ5LWJmYWYtMTY0NGNlMTc2MzM2XkEyXkFqcGdeQXVyMjI5MjU5OTI@._V1_SX300.jpg"
      },
      {
        Title: "Run for Your Life",
        Year: "1965–1968",
        imdbID: "tt0058844",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMmNlMDY3NTEtNzI3NS00MzJjLWE1MjctZGRlOThmZmE3YzkyXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"
      }
    ];
    const actual = await repository.findSeriesByWord(search, true);

    expect(actual).toStrictEqual(expected);
  });
});
