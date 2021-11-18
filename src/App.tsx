import Routes from "./routes";
import GlobalStyle from "./style/globalStyle";
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import store from "./store";

import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    
    <>
    <Provider store={store}>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </Provider>
  
    </>
  );
}

export default App;
// todo arquivo tsx é renderizado pelo react