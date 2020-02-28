import React from 'react';
import './App.scss';

import Header from './components/header/header.component';
import Middle from './components/middle/middle.component'
import Footer from './components/footer/footer.component';

function App() {
  window.addEventListener('resize',()=>{
    window.location.reload()
  })
  return (
    <div className="App">
      <Header />
      <Middle/>
      <Footer/>
    </div>
  );
}

export default App;
