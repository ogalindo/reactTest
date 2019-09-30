import React, {Component} from 'react';
import url from '../util/Conection';



export default class Movies extends Component {


    constructor () {
        super()
        this.state = {
            results: {}    
        }
    }

    componentWillMount() {
        fetch(url.UrlApi)
          .then(res => res.json())
          .then( data => {
              //console.log(data);
              const { results } = data;
            //   this.state.data = data;
            //   this.state.movies = data.results;
              this.setState({ results});
              console.log('state',this.state);
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
                            <h4>{results[index].title}</h4>
                            <h4>{results[index].vote_average}</h4>
                            <p>{results[index].original_language}</p>
                            <p>{results[index].genre_ids}</p>
                            <p>{results[index].release_date}</p>
                        </div>
                        <div id="bodyMovie">
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