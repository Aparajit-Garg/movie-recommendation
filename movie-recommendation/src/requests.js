const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchComedy: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=35`,
    fetchHorror: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres/=27`,
    fetchAction: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=28`,
    fetchScifi: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=878`,
    fetchMystery: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=9648`,
    fetchRomance: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=10749`
};

export default requests;