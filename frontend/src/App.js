import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// import Home from './elements/Home';
import ChatPlatform from './elements/ChatPlatform';

import Home from './elements/Home';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chatting/:roomId/:userName' element={<ChatPlatform />} />
    </Routes>
  </Router>
);

export default App;
