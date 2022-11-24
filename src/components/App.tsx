import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import '../styles/sidebar.scss';
import SideBar from './sidebar';
import Gallery from './Gallery';
import '../styles/App.scss';
import tetra from '../assets/tetra_icon.png';
import { render } from '@testing-library/react';

// export default function Routing() {
//   return (
//     <Routes>
//       <Route path="/">
//         <App />
//       </Route>
//       <Route path="/gallery" element={<Gallery />}></Route>
//       <Route element={<NoMatch />} />
//     </Routes>
//   );
// }

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <div id="App">
      <SideBar
        customBurgerIcon={<img src={tetra} alt="menu button" />}
        isOpen
        pageWrapId={'page-wrap'}
        outerContainerId={'App'}
      />
      <div id="page-wrap"></div>
    </div>
  );
}

function NoMatch() {
  return (
    <div id="App">
      <SideBar
        customBurgerIcon={<img src={tetra} alt="Menu" />}
        pageWrapId={'page-wrap'}
        outerContainerId={'App'}
      />
      <div id="page-wrap">
        <h1>Are you lost?</h1>
      </div>
    </div>
  );
}
