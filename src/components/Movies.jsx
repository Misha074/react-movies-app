import {Movie} from './Movie'

export function Movies(props) {
    return <div className='movies'>
        {
            props.movies.map(movie => (
                <Movie key={movie.imdbID}
                    id={movie.imdbID}
                    type={movie.Type}
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}/>
            ))
        }
    </div>
}