import React, {useEffect} from 'react';
import useSWR from 'swr';
import {TableGrid} from '../molecules/tableGrid';
import {Link} from 'react-router-dom';
import {GridColDef} from '@mui/x-data-grid';
import {useGlobalStore} from '/@/store/global';

const getProjects = async () => {
  const array = await window.sqliteApi.getProjects();
  return array;
};

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90},
  {
    field: 'project_name',
    headerName: 'プロジェクト',
    width: 200,
    renderCell: params => {
      return <Link to="/lots">{params.value}</Link>;
    },
  },
  {field: 'project_objective', headerName: '目的', width: 100},
  {field: 'background', headerName: '背景', width: 200},
];

export const ProjectPage = () => {
  const store = useGlobalStore();
  const {data} = useSWR('projectPage', getProjects);
  if (!data) return null;
  return (
    <TableGrid
      list={data}
      columns={columns}
      onCellClick={param => {
        store.setProjectId(param.row.id);
      }}
    ></TableGrid>
  );
};
