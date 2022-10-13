import React, { Component } from 'react'
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css'

 class Home extends Component {

  state = {
    isloading: true,
    movies: [],
  }

  getMovies = async () =>{
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    console.log(movies);
    this.setState({isloading:false,movies}) //키와 키값이 동일하면 하나만 써줘도된다. ex>movies:movies => movies
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isloading : false});
    // }, 6000); 
    //로딩이 끝난 후 영화가 떠야하니 이 이후로 영화가 떠야함
    this.getMovies();
  }

  render() {
    const {isloading,movies} = this.state; //구조분해할당
    return (
      <>
      <section className='container'>
        {isloading ? 
          (<div className='loader'>
            <span className='loader_text'>'Loading...'</span>
          </div>)
          : 
          (<div className='movies'>
            {movies.map((movie,index) => (
                                <Movie 
                                key={index}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                                />))}
          </div>)
        }
      </section>
       
      </>
    )
  }
}

export default Home;
