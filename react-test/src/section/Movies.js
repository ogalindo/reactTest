import React, {Component} from 'react';
import url from '../util/Conection';
import '../assets/styles.scss'



export default class Movies extends Component {


    constructor () {
        super()
        this.state = {
            results: {}    
        }
    }

    componentWillMount() {
        fetch(url.UrlApiMovies)
          .then(res => res.json())
          .then( data => {
              console.log('data', data);
              const { results } = data;
            // this.state.data = data;
            // this.state.movies = data.results;
              this.setState({ results});
              console.log('state', this.state);
          })
    }

    _renderMovies () {
        console.log('resultados', this.state.results);

        const { results } = this.state
        
        return Object.keys(results)
        .map( (id, index) => {
            return(
                // <div key={index}>
                //     'titulo de la pelicula: ' {results[index].title} ' id: '
                //     <span>{id}</span>
                // </div>

                <div key={index} className="informationCard ">
                    <div id="poster">
                        
                    </div>
                    <div id="information">
                        <div id="headerMovie">
                            <span>
                                <h4>{results[index].title}</h4>
                                <h4>{results[index].vote_average}</h4>
                            </span>
                            <p>{results[index].original_language}</p>
                            <p>{results[index].genre_ids}</p>
                            <p>{results[index].release_date}</p>
                        </div>
                        <div id="bodyMovie" className="bodyMovie">
                        <p>{results[index].overview}</p>
                        </div>
                        <div id="footerMovie">
                            <button>Ver trailer</button>
                            <button>Agregar a favoritos</button>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render () {
        return (
        <div>
            {this._renderMovies()}
        </div>
        )
    }
}