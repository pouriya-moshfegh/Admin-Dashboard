import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";


export default function ProductChart() {
  // ___________ data  ___________
  const rows = [
    {
      id: 1,
      title: "dell",
      price: 353,
      avatar: "/public/image/products/dell.png",
    },
    {
      id: 2,
      title: "mac",
      price: 425,
      avatar: "/public/image/products/mac.jpg",
    },
    {
      id: 3,
      title: "lenovo",
      price: 450,
      avatar: "",
    },
    {
      id: 4,
      title: "asus",
      price: 160,
      avatar: "/public/image/products/asus.png",
    },
    {
      id: 5,
      title: "Samsung",
      price: 220,
      avatar: null,
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
      headerName: "Photo",
      description: "Item photo ",
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
      field: "title",
      headerName: "Title",
      width: 200,
      editable: true,
      headerClassName: "text-white font-bold",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 100,
      editable: true,
      headerClassName: " text-white font-bold",
      renderCell:(params)=>{
        return( `${params.row.price} $`)}
    },
    {
      field: "Edit",
      headerName: "",
      description: "delet item info",
      sortable: false,
      width: 110,
      headerClassName: "text-white font-bold",
      renderCell: (params) => {
        return (
          <div>
            <button
              onClick={() => {
                handleOpen();
                setTargetItem(params.row.id);
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
  const productDelete = () => {
    setAllRows((pervRows) =>
      pervRows.filter((eachrow) => {
        return eachrow.id !== targetItem;
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
  const [targetItem, setTargetItem] = useState();
  const [allRows, setAllRows] = useState(rows);

  return (
    <section className="box-container">
      <div className="mx-auto border-none">
        <h1 className="text-2xl">Products</h1>
        <DataGrid
          className={`border-none mt-4`}
          rows={allRows}
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
              productDelete();
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}
