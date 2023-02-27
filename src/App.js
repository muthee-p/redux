import {BrowserRouter,Routes, Route} from "react-router-dom";
import {CreatePost, Home, Login, PageNotFound, Profile} from './components';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store ={store}>
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route path="/" element={<Login />} />
              <Route path='/home' element ={<Home />}/>
              <Route path="/profile" element={<Profile />} />
              <Route path="/createpost" element={<CreatePost />} />
            </Routes>
          </BrowserRouter>
      
    </div>
    </Provider>
  );
}

export default App;
