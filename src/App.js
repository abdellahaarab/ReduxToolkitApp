
import './App.css';
import FormDajeuter from './Componnant/FormAdd';
import { Provider } from "react-redux";
import { store } from './data/store';
import ListDesStagers from './Componnant/ListDesStagers';
import FormDelete from './Componnant/FormDelete';
import FormEditStg from './Componnant/FormEditStg';
import FormRechercher from './Componnant/FormRechercher';


function App() {
  
  return (
    <Provider store={store}>
        <FormRechercher/>
        <FormDajeuter  />
        <FormDelete/>
        <ListDesStagers/>
        <FormEditStg/>
    </Provider>
  );
} 

export default App;
