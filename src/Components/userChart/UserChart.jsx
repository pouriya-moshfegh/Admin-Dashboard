import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

export default function UserChart() {

  // ___________ data  ___________
  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      avatar: "/public/image/profile/avatar-1.jpg",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      avatar: "/public/image/profile/",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
      avatar: "/public/image/profile/avatar-2.jpg",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
      avatar: "/public/image/profile/avatar-1.jpg",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
      avatar: null,
    },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150, avatar: null },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      avatar: "/public/image/profile/avatar-3.jpg",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      avatar: "/public/image/profile/avatar-4.jpg",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
      avatar: "/public/image/profile/avatar-1.jpg",
    },
  ];
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      headerClassName: " text-white font-bold",
    },
    {
      field: "avatar",
      headerName: "Avatar",
      description: "User profile ",
      sortable: false,
      width: 100,
      headerClassName: "text-white font-bold",
      renderCell: (params) => {
        return (
          <div>
            <Avatar src={params.row.avatar} sx={{ bgcolor: "#5299e0" }}>
              {params.row.firstName && params.row.firstName.split("")[0]}
            </Avatar>
          </div>
        );
      },
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 240,
      editable: true,
      headerClassName: " text-white font-bold",
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 200,
      editable: true,
      headerClassName: " text-white font-bold",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
      editable: true,
      headerClassName: " text-white font-bold",
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "user first and last name",
      sortable: false,
      width: 200,
      headerClassName: "text-white font-bold",
      renderCell: (params) => {
        return (
          <div>
            {params.row.firstName} {params.row.lastName}
          </div>
        );
      },
    },
    {
      field: "Edit",
      headerName: "",
      description: "delet user info",
      sortable: false,
      width: 110,
      headerClassName: "text-white font-bold",
      renderCell: (params) => {
        return (
          <div>
            <button
              onClick={() => {
                handleOpen();
                setTargetRow(params.row.id);
              }}
            >
              <DeleteRoundedIcon />
            </button>
          </div>
        );
      },
    },
  ];

  // ___________ functions  ___________
  const userDelete = () => {
    setAllRows((pervRows) =>
      pervRows.filter((eachrow) => {
        return eachrow.id !== targetRow;
      })
    );
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  // ___________ states  ___________
  const [open, setOpen] = useState(false);
  const [targetRow, setTargetRow] = useState();
  const [allRows, setAllRows] = useState(rows);

  return (
    <section className="box-container">
      <div className="mx-auto border-none">
        <h1 className="text-2xl">Users</h1>
        <DataGrid
          className={`border-none mt-4`}
          rows={allRows}
          sx={{color:"#fff"}}
          columns={columns}
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </div>
      {/* ______________________ */}
      {/* Modal */}
      <Dialog open={open} keepMounted onClose={handleClose}>
        <div className="h-40 w-50 bg-secondary text-white pt-8 p-4">
          <h2 className="font-bold  text-xl">
            Are You sure you want to delete the user?
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
              userDelete();
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}
