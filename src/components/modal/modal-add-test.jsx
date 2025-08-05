import * as React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { serverTimestamp } from 'firebase/firestore';
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { CirclePlus } from "lucide-react";

import { createTestPlan } from "../../firebase/requests/add-test";
import { useAuthValue } from "../../context/auth-context";
import { addSubitem } from "../../firebase/requests/add-item-test";

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
      testName,
      testDescription,
      createdAt: serverTimestamp(),
    };

    setTestName("");
    setTestDescription("");

    console.log(data);
    try {
      const res = createTestPlan(data);
      console.log(res);
    } catch (error) {
      setError({ severity: "error", message: error });
    }

    handleClose();
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
        <form
          onSubmit={handleSubmit}
          className="min-w-[500px] p-5 flex flex-col gap-3"
        >
          <div className="flex flex-col gap-4">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Nome do teste"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              required
              variant="outlined"
            />
            <TextField
              className="w-full"
              id="outlined-basic"
              type="text-area"
              label="Descrição"
              value={testDescription}
              onChange={(e) => setTestDescription(e.target.value)}
              required
              variant="outlined"
            />
          </div>
          <DialogActions>
            <button
              type="button"
              onClick={handleClose}
              className="py-2 px-4 rounded-md font-medium cursor-pointer bg-zinc-800 text-white hover:bg-zinc-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="py-2 px-4 rounded-md font-medium cursor-pointer bg-green-600 text-white hover:bg-green-500"
            >
              Adicionar
            </button>
          </DialogActions>
        </form>
      </Dialog>
      {error && (
        <Alert
          severity={error.severity}
          sx={{ position: "absolute", bottom: 15 }}
          action={
            <Button color="inherit" size="small" onClick={() => setError()}>
              X
            </Button>
          }
        >
          {error.message}
        </Alert>
      )}
    </React.Fragment>
  );
};

export const AddNewItem = ({ id }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { user } = useAuthValue();

  const [banda, setBanda] = useState("");
  const [model, setModel] = useState("");
  const [firmware, setFirmware] = useState("");
  const [vendor, setVendor] = useState("");
  const [status, setStatus] = useState("");
  const [observation, setObservation] = useState("");
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      banda,
      model,
      firmware,
      vendor,
      observation,
      user: user.email.split("@")[0],
      status: status.length === 0 ? "created" : status,
      createdAt: new Date().toISOString(),
    };

    console.log(data);
    try {
      const res =  await addSubitem( id, data );

      setModel("")
      setStatus("")
      setBanda("")
      setFirmware("")
      setVendor("")
      setObservation("")
      console.log(res);
    } catch (error) {
      setError({ severity: "error", message: error});
    }

    handleClose();
  };

  return (
    <React.Fragment>
      <button
        onClick={handleClickOpen}
        className="cursor-pointer text-withe rounded-lg p-2 font-medium hover:text-zinc-400"
      >
        <CirclePlus />
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
        <form
          onSubmit={handleSubmit}
          className="min-w-[600px] w-full p-5 flex flex-col gap-3"
        >
          <div className="flex flex-col gap-4">
            <TextField
              className="w-full"
              id="outlined-basic"
              type="text-area"
              label="Modelo do dispositivo"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
              variant="outlined"
            />
            <TextField
              className="w-full"
              id="outlined-basic"
              type="text-area"
              label="Firmware testado"
              value={firmware}
              onChange={(e) => setFirmware(e.target.value)}
              required
              variant="outlined"
            />
            <div className="flex gap-2">
              <div className="w-full">
                <InputLabel id="demo-simple-select-label">Vendor</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={vendor}
                  required
                  onChange={(e) => setVendor(e.target.value)}
                  className="w-full"
                >
                  <MenuItem value="mitra">MitraStar</MenuItem>
                  <MenuItem value="askey">Askey</MenuItem>
                </Select>
              </div>
              <div className="w-full">
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full"
                >
                  <MenuItem value="testing">Em teste</MenuItem>
                  <MenuItem value="success">Sucesso</MenuItem>
                  <MenuItem value="failed">Falhou</MenuItem>
                </Select>
              </div>
              <div className="w-full">
                <InputLabel id="demo-simple-select-label">Banda</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={banda}
                  onChange={(e) => setBanda(e.target.value)}
                  className="w-full"
                  required
                >
                  <MenuItem value="wifi5">WiFi 5</MenuItem>
                  <MenuItem value="wifi6">WiFi 6</MenuItem>
                  <MenuItem value="wifi7">WiFi 7</MenuItem>
                </Select>
              </div>
            </div>
            <TextField
              className="w-full"
              id="outlined-basic"
              type="text-area"
              label="Observação"
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
              variant="outlined"
            />
          </div>
          <DialogActions>
            <button
              type="button"
              onClick={handleClose}
              className="py-2 px-4 rounded-md font-medium cursor-pointer bg-zinc-800 text-white hover:bg-zinc-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="py-2 px-4 rounded-md font-medium cursor-pointer bg-green-600 text-white hover:bg-green-500"
            >
              Adicionar
            </button>
          </DialogActions>
        </form>
      </Dialog>
      {error && (
        <Alert
          severity={error.severity}
          sx={{ position: "absolute", bottom: 15, left: "35%" }}
          action={
            <Button color="inherit" size="small" onClick={() => setError()}>
              X
            </Button>
          }
        >
          {error.message}
        </Alert>
      )}
    </React.Fragment>
  );
};
