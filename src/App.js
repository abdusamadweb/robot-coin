import './App.scss';

// global styles
import './assets/styles/normalize.css'
import './assets/styles/flex-box.css'
import './assets/styles/global.css'

import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {useLayoutEffect} from "react";
import Header from "./components/header/Header";
import Home from "./pages/home-page/home";
import SignIn from "./pages/sign/in/sign-in";
import SignUp from "./pages/sign/up/sign-up";
import Savdo from "./pages/savdo/savdo";
import SavdoBoshlash from "./pages/savdo/boshlash/savdo-boshlash";
import Buyurtmalar from "./pages/savdo/boshlash/buyurtmalar/buyurtmalar";
import Menu from "./pages/menu/menu";
import HisobToldirish from "./pages/hisob/toldirish/hisob-toldirish";
import HisobTasdiqlash from "./pages/hisob/toldirish/hisob-tasdiqlash";
import HisobChiqarish from "./pages/hisob/chiqarish/hisob-chiqarish";
import Sozlamalar from "./pages/sozlamalar/sozlamalar";
import Karta from "./pages/karta/karta";
import KartaQoshish from "./pages/karta/qoshish/karta-qoshish";
import MyTeam from "./pages/my-team/my-team";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/savdo' element={<Savdo />} />
            <Route path='/savdo/boshlash' element={<SavdoBoshlash />} />
            <Route path='/savdo/boshlash/arxiv' element={<Buyurtmalar />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/hisob' element={<HisobToldirish />} />
            <Route path='/hisob/tasdiqlash' element={<HisobTasdiqlash />} />
            <Route path='/hisob/chiqarish' element={<HisobChiqarish />} />
            <Route path='/sozlamalar' element={<Sozlamalar />} />
            <Route path='/karta' element={<Karta />} />
            <Route path='/karta/qoshish' element={<KartaQoshish />} />
            <Route path='/my-team' element={<MyTeam />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />

          </Routes>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
