import React from 'react';
import useSWR from 'swr';
import {TableGrid} from '../molecules/tableGrid';
import {Link} from '@mui/material';
import {GridColDef} from '@mui/x-data-grid';
import {useGlobalStore} from '/@/store/global';

const getLots = async (projectId: string) => {
  const array = await window.myapi.getLots(projectId);
  return array;
};

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90},
  {
    field: 'lot_number',
    headerName: 'ロットナンバー',
    width: 100,
    renderCell: params => {
      return <Link href="/lots">{params.value}</Link>;
    },
  },
  {field: 'project_id', headerName: 'project_id'},
  {field: 'production_date', headerName: '製造日', width: 100},
  {field: 'standard_lot_number', headerName: 'スタンダード', width: 100},
  {field: 'user_id', headerName: 'ユーザー', width: 100},
  {field: 'lot_objective', headerName: '目的', width: 100},
  {field: 'details', headerName: 'ロットの説明', width: 100},
  {field: 'is_deleted', headerName: 'is_deleted', width: 100},
  {field: 'created_at', headerName: 'created_at', width: 100},
  {field: 'updated_at', headerName: 'updated_at', width: 100},
];

type Props = {
  projectId: string;
};

export const LotsPage = () => {
  const {projectId} = useGlobalStore();
  const {data} = useSWR('lotsPage', () => getLots(projectId));
  if (!data) return null;
  return (
    <TableGrid
      list={data}
      columns={columns}
    ></TableGrid>
  );
};
