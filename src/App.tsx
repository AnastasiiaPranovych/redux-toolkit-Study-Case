import { Box, LinearProgress, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import ContentRoutes from "./ContentRoutes";
import RoutesEnum from "./enum/Routes.enum";
import HomePage from "./pages/HomePage/HomePage";

function App() {
    const [t] = useTranslation('global');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { pathname } = useLocation();

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return isLoading ? (
        <div className='Loading-Container'>
            <LinearProgress color={"primary"} />
        </div>
    ) : (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
            {pathname.toLocaleLowerCase() !==
                RoutesEnum.CAKES.toLocaleLowerCase() && <HomePage />}
            <ContentRoutes />
        </>
    );
}

export default App;