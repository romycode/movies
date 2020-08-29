import axios, { AxiosResponse } from "axios";
import { PreviewInfo } from "@/types/movies/PreviewInfo";
import Media from "@/types/movies/Media";
import { SearchResponse } from "@/types/movies/SearchResponse";

export default class OpenMovieDatabaseApi {
  readonly URL = "http://www.omdbapi.com/";
  private readonly apiKey: string;

  constructor(apiKey: string | null) {
    this.apiKey = null === apiKey ? process.env.VUE_APP_API_KEY : apiKey;
  }

  public async findMovieByTitle(title: string, fullPlot: boolean): Promise<Media> {
    return (await this.fetchInfo(undefined, undefined, title, fullPlot, "movie")).data as Media;
  }

  public async findSerieByTitle(title: string, fullPlot: boolean): Promise<Media> {
    return (await this.fetchInfo(undefined, undefined, title, fullPlot, "series")).data as Media;
  }

  public async findById(movieId: string, fullPlot: boolean): Promise<Media> {
    return (await this.fetchInfo(undefined, movieId, undefined, fullPlot, "movie")).data as Media;
  }

  public async findMoviesByWord(search: string, fullPlot: boolean): Promise<Array<PreviewInfo>> {
    const response = await this.fetchInfo(search, undefined, undefined, fullPlot, "movie");
    return (response.data as SearchResponse).Search;
  }

  public async findSeriesByWord(search: string, fullPlot: boolean): Promise<Array<PreviewInfo>> {
    const response = await this.fetchInfo(search, undefined, undefined, fullPlot, "series");
    return (response.data as SearchResponse).Search;
  }

  private async fetchInfo(
    s: string | undefined,
    i: string | undefined,
    t: string | undefined,
    fullPlot: boolean,
    type: string
  ): Promise<AxiosResponse<Media | SearchResponse>> {
    return await axios.get(this.URL, {
      params: { apiKey: this.apiKey, s, t, i, plot: fullPlot ? "full" : "short", type }
    });
  }
}
