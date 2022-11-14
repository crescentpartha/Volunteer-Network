import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import NotFound from './components/Shared/NotFound/NotFound';
import Register from './components/Authentication/Register/Register';
import VolunteerRegistration from './components/Home/VolunteerRegistration/VolunteerRegistration';
import Login from './components/Authentication/Login/Login';
import Admin from './components/Admin/Admin/Admin';
import AddEvent from './components/Admin/AddEvent/AddEvent';
import VolunteerRegisterList from './components/Admin/VolunteerRegisterList/VolunteerRegisterList';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home/:eventDetailId' element={
          <VolunteerRegistration></VolunteerRegistration>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/admin' element={<Admin></Admin>}>
          <Route path='addEvent' element={<AddEvent></AddEvent>}></Route>
          <Route path='volunteerRegisterList' element={<VolunteerRegisterList></VolunteerRegisterList>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
