import {Routes, Route} from 'react-router-dom'
import Home from "./compnents/routes/home/Home";
import Navigation from './compnents/routes/navigation/Navigation';
import Authentication from './compnents/routes/authentication/Authentication';

const App = () =>{
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
