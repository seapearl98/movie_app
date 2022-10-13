// import React from 'react'
// import PropTypes from 'prop-types';
// // import './Movie.css'

//  function Movie({genres,id,poster,title,year,summary}) {
//   return (
//     <div className='movie'>
//         <img src={poster} alt={title} title={title}/>
//         <div className='movie_data'>
//         <h1 className='movie_title'>title:{title}</h1>
//         <h2 className='movie_year'>year:{year}</h2>
//         <ul className='movie_genres'>
//             {genres.map((genre,index)=>{
//                 return(
//                 <li className='movie_genre' key={index}>{genre}</li>
//                 )
//             })}
//         </ul>
//         <p>summary:{summary.slice(0,180)}...</p>
//         </div>
//     </div>
//   )
// }

// Movie.propTypes = {
//     id: PropTypes.number.isRequired,
//     year:PropTypes.number.isRequired,
//     title:PropTypes.string.isRequired,
//     summary:PropTypes.string.isRequired,
//     poster:PropTypes.string.isRequired,
//     genres:PropTypes.arrayOf(PropTypes.string).isRequired
// }

// export default Movie;

import React from 'react'
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({genres,id,poster,summary,title,year}) {
    // const {genres,id,poster,summary,title,year} = props;
    // console.log(props);
  return (
    <Link to={'/detail'} state={{genres,id,poster,summary,title,year}}>
        <div className='movie'>
            <img src={poster} alt={title} title={title} />
            <div className='movie_data'>
                <h3 className='movie_title'>title : {title}</h3>
                <h4 className='movie_year'>year : {year}</h4>
                <ul className='movie_genres'>
                    {genres.map((genres, index) => {
                    return (
                        <li className='movie_genre' key={index}>{genres}</li>
                        )
                    })}
                </ul>
                <p className='movie_summary'>{summary.slice(0,180)} ...</p>
            </div>
        </div>
    </Link>
  )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
                    // arrayOf: 문자열을 원소로 갖는 배열
}

export default Movie;
