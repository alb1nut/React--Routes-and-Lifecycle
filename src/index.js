import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter ,Route, Routes, Link } from 'react-router-dom'

//Components
import Home  from './components/Home'
import Posts from './components/Posts'
import Profiles from './components/Profiles'

const App = () => {


  return (
   

    <BrowserRouter>
      <div>
        <header>
           <Link to='/'>Home</Link> <br/>
           <Link to='/posts'>Posts</Link> <br />
           <Link to={{
             pathname:'/profile',
            // hash : '#albert',
            // search:'?profile=true'

          }}>Profile</Link><br />
           <hr/>
        </header>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/posts' element={<Posts/>} />
          <Route path='/profile' element={ <Profiles/>} />
        </Routes>

      </div>
    </BrowserRouter>
   
  )
}

const root =ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <App/>,
  
);