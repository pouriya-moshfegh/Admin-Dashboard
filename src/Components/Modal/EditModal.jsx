/* eslint-disable react/prop-types */

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

export default function EditModal({
  open,
  handleClose,
  targetEdit,
  fetchFunc,
}) {
  return (
    <Dialog open={open} keepMounted onClose={handleClose}>
      <div className="h-40 w-50 bg-secondary text-white pt-8 p-4">
        <h2 className="font-bold  text-xl">Edit Comment</h2>
      </div>
      <DialogActions className="bg-secondary/90">
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            handleClose();
          }}
        >
          Ignore
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            handleClose();
            targetEdit();
            fetchFunc();
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
