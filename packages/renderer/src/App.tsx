import React, {useEffect, useState} from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import './styles.css';
const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90},
  {field: 'project_name', headerName: 'プロジェクト', width: 200},
  {field: 'project_objective', headerName: '目的', width: 100},
  {field: 'background', headerName: '背景', width: 200},
];

declare global {
  interface Window {
    myapi: {nyan: (str: string) => Promise<string>; test: () => Promise<object[]>};
  }
}

const getNya = async () => {
  const array = await window.myapi.test();
  return array;
};

const App = () => {
  const [state, setState] = useState([
    {id: 0, project_name: 'nohooo', project_objective: 'athitai', background: 'teis'},
  ]);
  return (
    <DataGrid
      rows={state}
      columns={columns}
      rowsPerPageOptions={[3]}
    />
  );
};

export default App;
