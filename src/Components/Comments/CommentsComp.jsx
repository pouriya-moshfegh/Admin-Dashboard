import { useState, useEffect } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { DataGrid } from "@mui/x-data-grid";
import DeletModal from "../Modal/DeletModal";
import EditIcon from "@mui/icons-material/Edit";

export default function Commetns() {

  // ___________ states  ___________
  const [targetItem, setTargetItem] = useState("");
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);

  const columns = [
    {
      field: "userID",
      headerName: "user",
      width: 100,
      headerClassName: " text-white font-bold",
    },
    {
      field: "productID",
      headerName: "product",
      sortable: false,
      width: 130,
      headerClassName: "text-white font-bold",
    },
    {
      field: "body",
      headerName: "Comment",
      width: 350,
      headerClassName: "text-white font-bold",
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      headerClassName: "text-white font-bold",
    },
    {
      field: "hour",
      headerName: "Time",
      width: 100,
      headerClassName: "text-white font-bold",
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
            <button
              className="mx-4"
              onClick={() => {
                handleOpen();
                setTargetItem(params.row.id);
              }}
            >
              <EditIcon />
            </button>
          </div>
        );
      },
    },
  ];

  // ___________ data  ___________
  const getProdcuts = useEffect(() => {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((res) => setRows(res));
  }, []);
  const commentDeleteApi = fetch(
    `http://localhost:8000/api/comments/${targetItem.toString()}`,
    {
      method: "DELETE",
    }
  ).then((res) => console.log(res));

  // ___________ functions  ___________
  const commentDeleteDom = () => {
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
      <div className="mx-auto border-none">
        <h1 className="text-2xl">Comments</h1>
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
      {/* ___________ delete Modal  ___________ */}
      <DeletModal
        open={open}
        handleClose={handleClose}
        targetItem={targetItem}
        targetDelete={commentDeleteDom}
        fetchFunc={commentDeleteApi}
      />
    </section>
  );
}
