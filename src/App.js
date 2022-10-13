// import React from 'react';
// import Macaron from './Macaron';
// import cakes from './cakes.json';

// function App() { //부모 component
//   return (
//     <>
//       <div className='app'>안녕하세요!</div>
//       {cakes.map(cake =>(
//                 <Macaron
//                       propsid={cake.id}
//                       propsname={cake.name}
//                       propsimage={cake.image}
//                 />
//       ))}
//     </> 

//   );
// }

// export default App;
//---------------------------------리액트1회 수업-----------------------------------

// import React, { Component } from 'react'
// import Cake from './Cake';

//  class App extends Component {
  // constructor(props){
  //   super(props);
  //   console.log('constructor함수는 클래스형 컴포넌트가 생성할 때 호출됨')
  // }

  // componentDidMount(){
  //   console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수')
  // }

  // componentDidUpdate(){
  //   console.log('componentDidUpdate함수는 화면이 새로그려지면 즉, 업데이트되면 실행되는 함수')
  // }

  // componentWillUnmount(){
  //   console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수')
  // }

//   state = {
//     count: 0,
//     sum: 0,
//     avg: 0,
//   };

//   add = () => {
//     console.log('더하기');
//     //this.state.count = 1;
//     this.setState({  //current는 this.state
//       count: this.state.current.count + 1
//     });

//   }

//   minus = () =>{
//     console.log('빼기')
//     //this.state.count = -1;
//     //this.setState({count:1}) 값이 1로 고정
//     this.setState(current => (
//       {count:current.count - 1} //이렇게 쓰는게 더 최적화된것>
//     ));
//   }

//  render() {
//     return (
//       <>
//       <div>
//         <h1>현재 숫자는{this.state.count}입니다.</h1>
//         <button onClick={this.add}>더하기</button>
//         <button onClick={this.minus}>빼기</button>
//       </div>
//       <Cake />
//       </>
//     )
//   }
// }

// export default App;
//리액트 수업2--------------------------------------------------
// import React, { Component } from 'react'
// import axios from 'axios';
// import Movie from './components/Movie';

//  class App extends Component {

//   state = {
//     isloading: true,
//     movies: [],
//   }

//   getMovies = async () =>{
//     const {
//       data: {
//         data: {movies},
//       },
//     } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
//     console.log(movies);
//     this.setState({isloading:false,movies}) //키와 키값이 동일하면 하나만 써줘도된다. ex>movies:movies => movies
//   }

//   componentDidMount() {
//     // setTimeout(() => {
//     //   this.setState({isloading : false});
//     // }, 6000); 
//     //로딩이 끝난 후 영화가 떠야하니 이 이후로 영화가 떠야함
//     this.getMovies();
//   }

//   render() {
//     const {isloading,movies} = this.state; //구조분해할당
//     return (
//       <>
//       <section className='container'>
//         {isloading ? 
//           (<div className='loader'>
//             <span className='loader_text'>'Loading...'</span>
//           </div>)
//           : 
//           (<div className='movies'>
//             {movies.map((movie,index) => (<Movie 
//                                 key={index}
//                                 id={movie.id}
//                                 year={movie.year}
//                                 title={movie.title}
//                                 summary={movie.summary}
//                                 poster={movie.medium_cover_image}
//                                 genres={movie.genres}
//                                 />))}
//           </div>)
//         }
//       </section>
       
//       </>
//     )
//   }
// }

// export default App;
//리액트 수업3---------------------------------------------------------------------

import React from 'react'
import Home from './routes/Home'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import About from './routes/About'
import Movie from './components/Movie'
import Detail from './routes/Detail'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;