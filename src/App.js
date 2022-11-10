import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './pages/Home';
import Main_chat from './pages/Main_chat';

function App() {
  return (

    <>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/main-chat" element={<Main_chat />} />

      </Routes>






    </>
  );
}

export default App;
