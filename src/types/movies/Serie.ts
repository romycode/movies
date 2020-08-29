import Media, { Rating } from "@/types/movies/Media";

export default interface Serie extends Media {
  Released: string;
  totalSeasons: string;
  Metascore: string;
  imdbID: string;
  Plot: string;
  Director: string;
  Title: string;
  Actors: string;
  imdbRating: string;
  imdbVotes: string;
  Ratings: Array<Rating>;
  Response: string;
  Runtime: string;
  Type: string;
  Awards: string;
  Year: string;
  Language: string;
  Rated: string;
  Poster: string;
  Country: string;
  Genre: string;
  Writer: string;
}
