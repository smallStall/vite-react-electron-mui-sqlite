import React, {useEffect, useState} from 'react';
import {Link} from '@mui/material';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import './styles.css';
import {Box, styled} from '@mui/system';
const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90},
  {
    field: 'project_name',
    headerName: 'プロジェクト',
    width: 200,
    renderCell: params => {
      return <Link href="/lots">{params.value}</Link>;
    },
  },
  {field: 'project_objective', headerName: '目的', width: 100},
  {field: 'background', headerName: '背景', width: 200},
];

const getNya = async () => {
  const array = await window.myapi.test();
  return array;
};

const StyledDataGrid = styled(DataGrid)({
  '.MuiDataGrid-cellContent': {
    whiteSpace: 'pre-line',
    padding: '5px 0 5px 0',
  },
  '.MuiDataGrid-cell': {
    alignItems: 'start',
  },
  'MuiDataGrid-row': {
    height: '200px',
  },
});

type Props = {
  list: object[];
};

export const TableGrid = ({list}: Props) => {
  const [state, setState] = useState(list);
  useEffect(() => {
    const func = async () => {
      setState(await getNya());
    };
    func();
  }, []);
  return (
    <Box
      height={400}
      width={600}
      textAlign="left"
    >
      <StyledDataGrid
        rows={state}
        columns={columns}
        rowsPerPageOptions={[3]}
        getRowHeight={() => 'auto'}
      />
    </Box>
  );
};
