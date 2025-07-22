import * as React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { nanoid } from "nanoid";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AddNewTest = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [testName, setTestName] = useState("");
  const [testDescription, setTestDescription] = useState("");
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      uuid: nanoid(),
      testName,
      testDescription,
      createdAt: new Date(),
    };

    if (testName.length === 0)
      setError({severity: "error", message: "O nome do seu teste não deve ser vazio"});

    console.log(data);
    handleClose()
  };

  return (
    <React.Fragment>
      <button
        onClick={handleClickOpen}
        className="cursor-pointer bg-white text-zinc-900 rounded-lg w-52 p-2 font-medium hover:bg-[#cdcdcd]"
      >
        Adicionar teste
      </button>
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Adicione seu novo teste"}</DialogTitle>
        <form></form>
        <DialogActions>
          <button
            onClick={handleClose}
            className="py-2 px-4 rounded-md font-medium cursor-pointer bg-zinc-800 text-white hover:bg-zinc-600"
          >
            Cancelar
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="py-2 px-4 rounded-md font-medium cursor-pointer bg-green-600 text-white hover:bg-green-500"
          >
            Adicionar
          </button>
        </DialogActions>
      </Dialog>
      { error && <Alert
        severity={error.severity}
        sx={{ position: "absolute", bottom: 15}}
        action={
          <Button color="inherit" size="small" onClick={() => setError()}>
            X
          </Button>
        }
      >
        {error.message}
      </Alert>}
    </React.Fragment>
  );
};
