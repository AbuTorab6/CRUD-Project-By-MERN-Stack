
import {BrowserRouter} from 'react-router-dom'


import Navigation from './components/Navigation';
import CreateForm from './components/CreateForm';
import Loader from './components/Loader';
import ListProduct from './components/ListProduct';
import UpdateForm from './components/UpdateForm';


import ReadPage from './pages/ReadPage';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';

import MyRouter from './router/MyRouter';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <MyRouter/>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
