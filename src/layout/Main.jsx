import React from 'react'
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    state = {
        movies: [],
        errorResponce: false,
        strType: "",
      }

      componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json();
          })
          .then(data => {
            if(data.Response === 'False') {
              this.setState({errorResponce: true})
            }
            else {
              this.setState({errorResponce: false})
              this.setState({movies: data.Search})
            }
            return data;
          })
          .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
          });
      }

      searchMovies = (str, type = "") => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type === "" ? "" : `&type=${type}`}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json();
          })
          .then(data => {
            if(data.Response === 'False') {
              this.setState({errorResponce: true})
            }
            else {
              this.setState({errorResponce: false})
              this.setState({movies: data.Search})
            }
            return data;
          })
          .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
          });
      }

    render() {
        return <main className="content container">
                    <Search searchMovies={this.searchMovies} selectType={this.selectType}/>
                    {
                      this.state.errorResponce === true ? 
                      <h4>По вашему запросу фильм не найден =/
                          Попробуйте ещё раз</h4>
                      : 
                      this.state.movies.length === 0 ?
                      <Preloader />
                      :
                      <Movies 
                      movies={this.state.movies}
                      />
                    }
                </main>
    }
}

export {Main}