import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Landing, Form, Detail } from './views';
import NavBar from './components/NavBar/NavBar.jsx';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        {/* NavBar should always be displayed */}
        <NavBar />

        {/* Routes components */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Form />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;

/*import { Home, Landing, Form, Detail } from './views';
import NavBar from './components/NavBar/NavBar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  const location = useLocation();
  return (
    <Provider store={store}>
    <div className="App">
    {location.pathname !== '/' && <NavBar />}
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;

//<BrowserRouter>
        /*<Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<Form />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>{//location.pathname !== '/' && <NavBar />}*/