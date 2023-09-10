import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { userRows } from "../assets/data/lawyertablesource";

const Lawyertable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img
              className="w-8 h-8 object-cover mr-5 rounded-[50%]"
              src={params.row.img}
              alt="avatar"
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },

    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "catagory",
      headerName: "Catagory",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithCatagory ${params.row.catagory}`}>
            {params.row.catagory}
          </div>
        );
      },
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-[15px]">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="text-[darkblue] border cursor-pointer px-[5px] py-0.5 rounded-[5px] border-dotted border-[rgba(0,0,139,0.596)]">
                View
              </div>
            </Link>
            <div
              className="text-[crimson] border cursor-pointer px-[5px] py-0.5 rounded-[5px] border-dotted border-[rgba(220,20,60,0.6)]"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="h-[580px] pt-1">
      <div className="w-full text-[24px] text-[gray] flex items-center justify-between mb-2.5">
        Lawyer List
        <Link
          to="/lawyers/new"
          className="no-underline text-[green] text-base font-normal border cursor-pointer p-[5px] rounded-[5px] border-solid border-[green]"
        >
          Add New
        </Link>
      </div>

      <DataGrid
        style={{ height: "527px" }}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[8, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Lawyertable;
