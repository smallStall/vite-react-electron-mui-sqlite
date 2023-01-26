import React, {useEffect, useState} from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Box, styled} from '@mui/system';

const StyledDataGrid = styled(DataGrid)({
  '.MuiDataGrid-cellContent': {
    whiteSpace: 'pre-line',
    padding: '5px 0 5px 0',
  },
  '.MuiDataGrid-cell': {
    alignItems: 'start',
  },
});

type Props = {
  list: object[];
  columns: GridColDef[];
};

export const TableGrid = ({list, columns}: Props) => {
  return (
    <Box
      height={500}
      width={1000}
      textAlign="left"
    >
      <StyledDataGrid
        rows={list}
        columns={columns}
        rowsPerPageOptions={[3]}
        getRowHeight={() => 'auto'}
      />
    </Box>
  );
};
