/* eslint-disable react/prop-types */

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

export default function DeletModal({
  open,
  handleClose,
  targetEdit,
  fetchFunc

}) {
  return (
    <Dialog open={open} keepMounted onClose={handleClose}>
      <div className="h-40 w-50 bg-secondary text-white pt-8 p-4">
        <h2 className="font-bold  text-xl">
          Are You sure you want to delete the Products?
        </h2>
      </div>
      <DialogActions className="bg-secondary/90">
        <Button variant="contained" color="success" onClick={handleClose}>
          Ignore
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            handleClose();
            targetEdit();
            fetchFunc
           
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
