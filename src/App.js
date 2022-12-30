import Modal from "./components/ModalPopup"
import { Fragment, useEffect } from "react";
import NavBar from "./components/NavBar";
import Shopping from "./components/Shopping";
import { useState } from "react";
import { Route, Routes } from "react-router";
import Detail from "./components/Detail";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";


function App() {
  const [open,setOpen] = useState(false)
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);


   const handleOpen = () => setOpen(true); 
   const handleClose = () => setOpen(false); 

  return (
    <Fragment>
        <NavBar handleOpen={handleOpen} user={user}/>
        <Modal  handleClose={handleClose} open={open} />
        <Routes>
          <Route path="/" element={<Shopping />}/>
          <Route path="/:id" element={<Detail/>}/>
        </Routes>
    </Fragment>
  );
}

export default App;
