export class Conection {
    static ApiKey = '012f4228f4ce1bd6a40c9378ad6e99ba'
    static UrlApiMovies = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.ApiKey +'&language=en-US&query=1&page=1&include_adult=false';
    static UrlApiSeries = 'https://api.themoviedb.org/3/search/tv?api_key=' + this.ApiKey + '&language=en-US&query=1&page=1';
}

export default Conection;