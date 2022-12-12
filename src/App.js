

import Navbar from './components/Navigation';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import ThreeGrid from './components/ThreeGrid';
import FourGrid from './components/FourGrid';
import FiveGrid from './components/FiveGrid';
import SpeedBlokTwentyFive from './components/pages/SpeedBlokTwentyFive';
import SpeedBlokFifty from './components/pages/SpeedBlokFifty';
import About from './components/pages/About';
import SpeedBlokOneHundred from './components/pages/SpeedBlokOneHundred';
import Home from './components/pages/Home'
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <div className='App'>
<Routes>
      <Route path="/" element={<Home/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/threeGrid" element={<ThreeGrid/>}></Route>
       <Route path="/fourGrid" element={<FourGrid/>}></Route>
       <Route path="/fiveGrid" element={<FiveGrid/>}></Route>
       <Route path="/speed25" element={<SpeedBlokTwentyFive/>}></Route>
       <Route path="/speed50" element={<SpeedBlokFifty/>}></Route>
       <Route path="/speed100" element={<SpeedBlokOneHundred/>}></Route>
</Routes>
</div>

</>

  );
}

export default App;
