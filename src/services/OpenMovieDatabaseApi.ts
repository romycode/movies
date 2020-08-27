import { Movie } from "@/types/movies/Movie";
import axios from "axios";
import { PreviewInfo } from "@/types/movies/PreviewInfo";

export default class OpenMovieDatabaseApi {
  readonly URL = "http://www.omdbapi.com/";
  private readonly apiKey: string;

  constructor(apiKey: string | null) {
    this.apiKey = null === apiKey ? process.env.VUE_APP_API_KEY : apiKey;
  }

  public async findByTitle(title: string, fullPlot: boolean): Promise<Movie> {
    return (
      await axios.get(this.URL, {
        params: { apiKey: this.apiKey, t: title, plot: fullPlot ? "full" : "short" }
      })
    ).data;
  }

  public async findById(movieId: string, fullPlot: boolean): Promise<Movie> {
    return (
      await axios.get(this.URL, {
        params: { apiKey: this.apiKey, i: movieId, plot: fullPlot ? "full" : "short" }
      })
    ).data;
  }

  public async findByWord(search: string, fullPlot: boolean): Promise<PreviewInfo> {
    return (
      await axios.get(this.URL, {
        params: { apiKey: this.apiKey, s: search, plot: fullPlot ? "full" : "short" }
      })
    ).data['Search'];
  }
}
