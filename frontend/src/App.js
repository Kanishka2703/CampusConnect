import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/Auths/Signup"
import Login from './components/Auths/Login';
import CreatePost from './components/Posts/CreatePost';
import MainScreen from './components/MainScreen';
import AllPost from './components/Posts/AllPost';

import MyProfile from './components/Profiles/MyProfile';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchPage from './components/SearchPage';
import UserProfile from './components/Profiles/UserProfile';
// import { useNavigate } from 'react-router-dom';


const App=()=>{
  // const useNavigate =useNavigate()
return<>



<Routes>
  <Route  exact path='/'  element={<Signup/>}></Route>
  <Route   path='/login'  element={<Login/>}></Route>
  <Route path='/MainScreen'    element={<MainScreen/>}></Route>   
  <Route path='/allpost'    element={<AllPost/>}></Route> 
   <Route path='/CreatePost'    element={<CreatePost/>}></Route>  
  <Route path='/SearchPage' element={<SearchPage/>}/>
  <Route path='/MyProfile' element={<MyProfile/>}/>
  <Route path='/UserProfile' element={<UserProfile/>}/>
</Routes>
</>


    
  
 
  
}
export default App