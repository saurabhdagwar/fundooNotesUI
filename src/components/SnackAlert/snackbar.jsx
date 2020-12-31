import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert variant="filled" {...props} />;
}

function SnackBar() {
  const [open, setOpen] = React.useState(false);

   const resType = (type) => {
    return type;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Message = (message) => {
    setOpen(true);
    return `${message}`;
  };

  return (
    <div>
      <div>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity={resType}>
            <Message />
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}