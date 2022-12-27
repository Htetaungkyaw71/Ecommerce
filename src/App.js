import Modal from "./components/ModalPopup"
import { Fragment } from "react";
import NavBar from "./components/NavBar";
import Shopping from "./components/Shopping";
import { useState } from "react";

function App() {
  const [open,setOpen] = useState(false)

   const handleOpen = () => setOpen(true); 
   const handleClose = () => setOpen(false); 

  return (
    <Fragment>
        <NavBar handleOpen={handleOpen}/>
        <Modal  handleClose={handleClose} open={open} />
        <Shopping />
    </Fragment>
  );
}

export default App;
