import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Home, Signup } from "./pages";
import socketIO from "socket.io-client";
const SERVER = "http://localhost:8080"

function App() {
  const [isAuth, setIsAuth] = useState(false);
  var socket = socketIO(SERVER);
  socket.on('connection', () => {
    console.log('I am connected');
  });
  useEffect(()=> {
    if(localStorage.getItem("user")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={
          <Routes>
            {
              isAuth ? 
                (
                  <Route path="*" element={
                    <Routes>
                      <Route path="/" element={<Home socket={socket} />} />
                      <Route exact path='/sign-up' element={<Navigate to='/' />} />
                      <Route exact path='*' element={<Navigate to='/' />} />
                    </Routes>
                  } />
                ) : (
                  <Route path="*" element={
                    <Routes>
                      <Route exact path="/sign-up" element={<Signup socket={socket} />} />
                      <Route exact path='*' element={isAuth ? <Outlet /> : <Navigate to='/sign-up' />} />
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