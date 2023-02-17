import { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { Home, Chat, Signup, Login } from "./pages";
import socketIO from "socket.io-client";
import Navbar from "./components/Navbar";
const SERVER = "http://localhost:8080"

function App() {
  const [isAuth, setIsAuth] = useState(false);
  var socket = socketIO(SERVER);
  socket.on('connection', () => {
    console.log('I am connected');
  });
  useLayoutEffect(()=> {
    if(localStorage.getItem("user")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="*" element={
          <Routes>
            {
              isAuth ? 
                (
                  <Route path="*" element={
                    <Routes>
                      <Route path="/" element={<Home socket={socket} />} />
                      <Route path="/chat" element={<Chat socket={socket} />} />
                      <Route exact path='/login' element={<Navigate to='/' />} />
                      <Route exact path='*' element={<Navigate to='/' />} />
                    </Routes>
                  } />
                ) : (
                  <Route path="*" element={
                    <Routes>
                      <Route exact path="/sign-up" element={<Signup socket={socket} />} />
                      <Route exact path="/login" element={<Login socket={socket} />} />
                      <Route exact path='*' element={isAuth ? <Outlet /> : <Navigate to='/login' />} />
                    </Routes>
                  } />
                )
            }
          </Routes>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;