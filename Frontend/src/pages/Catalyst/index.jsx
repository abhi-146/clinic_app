import React, { useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, MenuItem, Select, TextField } from "@mui/material";
import * as XLSX from "xlsx";
import '../../styles/Catalyst/index.scss'
import { AppContext } from '../../ContextApi/AppContext'

const Admin = () => {
  const { data } = useContext(AppContext);

const [filterTreatment, setFilterTreatment] = useState([]);
const [filterArmy, setFilterArmy] = useState([]);
const [filterDate, setFilterDate] = useState("");

const filteredData = Array.isArray(data)
  ? data.filter((row) => {
      const matchesTreatment =
        filterTreatment.length === 0 || filterTreatment.includes(row.treatment) || filterTreatment.includes("");
      const matchesArmy =
        filterArmy.length === 0 || filterArmy.includes(row.army) || filterArmy.includes("");
      const matchesDate = !filterDate || row.date.includes(filterDate);
      return matchesTreatment && matchesDate && matchesArmy;
    })
  : [];

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "number", headerName: "Number", width: 200 },
    { field: "address", headerName: "Address", width: 300 },
    {
      field: "treatment",
      headerName: "Treatment",
      width: 230,
      renderHeader: () => (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "25px" }}>
          <span>Treatment</span>
          <Select
            multiple
            value={filterTreatment}
            onChange={(e) => setFilterTreatment(e.target.value)}
            displayEmpty
            sx={{
              width: "100%",
              border: "none",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none", // Removes the border of the dropdown
              },
            }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Leg">Leg</MenuItem>
            <MenuItem value="Arm">Arm</MenuItem>
            <MenuItem value="Face / Eye / Nose / Ear">Face / Eye / Nose / Ear</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </div>
      ),
    },
    {
      field: "army",
      headerName: "Army",
      width: 230,
      renderHeader: () => (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "25px" }}>
          <span>Army</span>
          <Select
            multiple
            value={filterArmy}
            onChange={(e) => setFilterArmy(e.target.value)}
            displayEmpty
            sx={{
              width: "100%",
              border: "none",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none", // Removes the border of the dropdown
              },
            }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Leg">ECHS</MenuItem>
            <MenuItem value="Arm">CGHS</MenuItem>
          </Select>
        </div>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      width: 388,
      renderHeader: () => (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "25px" }}>
          <span>Date</span>
          <TextField
            type="month"
            onChange={(e) => setFilterDate(e.target.value)}
            placeholder="Filter by Month/Year"
            InputLabelProps={{ shrink: true }}
          />
        </div>
      ),
    },
  ];

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
  };

  return (

    <div className="admin">
      <h1 className="admin__heading">Admin Panel</h1>
      <Box sx={{
        height: 600,
        width: "100%",
        maxWidth: "1300px",
        scrollbarWidth: "none"
      }}>
        <button className="admin__export" onClick={exportToExcel}>Export to Excel</button>
        <DataGrid
          rows={filteredData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </div>

  );
};

export default Admin;
