import { useState, useEffect } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { Avatar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteModal from "../Modal/DeletModal";

export default function ProductsBox() {
  // ___________ states  ___________
  const [open, setOpen] = useState(false);
  const [targetItem, setTargetItem] = useState("");
  const [rows, setRows] = useState([]);

  // ___________ data api  ___________
  const getProdcutsApi = useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((res) => setRows(res));
  }, []);

  const DeleteProductsApi = fetch(
    `http://localhost:8000/api/products/${targetItem.toString()}`,
    {
      method: "DELETE",
    }
  ).then((res) => console.log(res));
  // ___________ data grid  ___________

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
            <Avatar src={params.row.img} sx={{ bgcolor: "#5299e0" }}>
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
      renderCell: (params) => {
        return `${params.row.price} $`;
      },
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
  const deleteProductDom = () => {
    setRows((pervRows) =>
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

  return (
    <section className="box-container">
      {/* ___________  Data grid   ___________ */}
      <div className="mx-auto border-none">
        <h1 className="text-2xl">Products</h1>
        <DataGrid
          className={`border-none mt-4`}
          rows={rows}
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

      {/* ___________  Modal   ___________ */}
      <DeleteModal
        open={open}
        handleClose={handleClose}
        targetItem={targetItem}
        targetDelete={deleteProductDom}
        fetchFunc={DeleteProductsApi}
      />
    </section>
  );
}
