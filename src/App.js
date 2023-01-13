
import './App.css';
import FormDajeuter from './Componnant/FormDajeuter';
import { Provider } from "react-redux";
import { store } from './data/store';
import ListDesStagers from './Componnant/ListDesStagers';
import FormDelete from './Componnant/FormDelete';


function App() {
  
  return (
    <Provider store={store}>
        <FormDajeuter  />
        <FormDelete/>
        <ListDesStagers/>
    </Provider>
  );
} 

export default App;
