import {Routes, Route} from 'react-router-dom'
import Home from "./compnents/routes/home/Home";
import Navigation from './compnents/routes/navigation/Navigation';
import SignIn from './compnents/routes/sign-in/Sign-in';

const App = () =>{
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='/SignIn' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
