
import './App.css';
import FormDajeuter from './Componnant/FormAdd';
import { Provider } from "react-redux";
import { store } from './data/store';
import ListDesStagers from './Componnant/ListDesStagers';
import FormDelete from './Componnant/FormDelete';
import FormEditStg from './Componnant/FormEditStg';
import Appbar from './section/appbar';
import { BrowserRouter as Router, Routes , Route  } from 'react-router-dom';


function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <Appbar/>
        <Routes>
          <Route path="/" element={<ListDesStagers/>}/>
          <Route path="/ajeuter" element={<FormDajeuter  />} />
          <Route path='/delete' element={<FormDelete/>}/>
          <Route path='/edit' element={<FormEditStg/>}/>
        </Routes>
      </Router>
    </Provider>
  );
} 

export default App;
