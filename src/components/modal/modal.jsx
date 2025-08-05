import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  p: 4,
};

export const BasicModal = ({ icon, title, text, func }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          width: "100%",
          background: "none",
          padding: 0,
          margin: 0,
          color: "red",
        }}
        onClick={handleOpen}
        className="bg-red-500"
      >
        {icon}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="bg-white text-zinc-900 rounded-md flex flex-col gap-8"
        >
          <div className="">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              {text}
            </Typography>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleClose}
              className="py-2 px-4 rounded-md font-medium cursor-pointer bg-zinc-800 text-white hover:bg-zinc-600"
            >
              Cancelar
            </button>
            <button
            type="submit"
              onClick={func}
              className="py-2 px-4 rounded-md font-medium cursor-pointer bg-red-600 text-white hover:bg-red-400"
            >
              Excluir
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
