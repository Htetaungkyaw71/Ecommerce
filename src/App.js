import Modal from "./components/ModalPopup"
import { Fragment } from "react";
import NavBar from "./components/NavBar";
import Shopping from "./components/Shopping";
import { useState } from "react";
import { Route, Routes } from "react-router";
import Detail from "./components/Detail";


function App() {
  const [open,setOpen] = useState(false)

   const handleOpen = () => setOpen(true); 
   const handleClose = () => setOpen(false); 

  return (
    <Fragment>
        <NavBar handleOpen={handleOpen}/>
        <Modal  handleClose={handleClose} open={open} />
        <Routes>
          <Route path="/" element={<Shopping />}/>
          <Route path="/:id" element={<Detail/>}/>
        </Routes>
    </Fragment>
  );
}

export default App;
