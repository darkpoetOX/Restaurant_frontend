import {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SubmitRestaurantForm from '../components/SubmitRestaurantForm';

const NavBar = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      

     // Step 1: Create a state variable for the modal
  const [openModal, setOpenModal] = useState(false);

  // Step 2: Define functions to handle opening and closing the modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


    return(
            <nav className="custom-navbar">
                <img className="logo" src="/Images/logo.png"/>
                <a href="">About Us</a>
                <Button onClick={handleOpenModal}>Submit Restaurant</Button>

                <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                   <Typography>
                    <h4>Submit Restaurant</h4>
                   </Typography>
                    <SubmitRestaurantForm handleClose={handleCloseModal} />
                </Box>
                </Modal> 

                
                {/* <a href="">Submit Restaurant</a> */}
            </nav>
    )
}

export default NavBar;