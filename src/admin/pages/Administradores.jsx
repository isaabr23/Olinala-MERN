// npm i @mui/x-data-grid

import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit';
import { BotonAdd } from '../interface/BotonAdd';
import { useAdminStore } from '../../hooks/useAdminStore';
import { useSelector, useDispatch } from 'react-redux';
import { adminActive } from '../../store/admins/admindsSlice';
import { AdminUpdate } from '../interface/AdminUpdate';
import { useState } from 'react';
import { BotonDelete } from '../interface/BotonDelete';

export const Administradores = () => {

  const dispatch = useDispatch();
  const { startLoadingAdmin } = useAdminStore();
  const { admin, activeAdmin } = useSelector( state => state.adminds)

  const [visibilidad, setVisibilidad] = useState(false)
  
  useEffect(() => {
    startLoadingAdmin();
  }, [ ])

  const onEdit = () => {
    setVisibilidad(!visibilidad)
  } 

  const casillas = [
    'nombre',
    'nivel',
    'fecha',
    'telefono',
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'Nombre', headerName: 'Nombre', width: 220 },
    { field: 'Nivel', headerName: 'Nivel', width: 160 },
    { field: 'Fecha', headerName: 'Fecha', width: 130 },
    { field: 'Telefono', headerName: 'Telefono', width: 170 },
    { field: 'Editar', headerName: '', width: 50, renderCell: () => {
      return (
        <>
          <EditIcon sx={{ fontSize: 25, marginRight: 2 }} onClick={ onEdit }/>
        </>
      );
    }},
  ];
  
  const rows = admin.map( element => (
    { id: element.id, Nombre: element.nombre, Fecha: element.fecha, Nivel: element.nivel, Telefono: element.telefono }
  )); 

  return (
    <>
    { visibilidad ? <AdminUpdate name={'administrador'} admin={admin} activeAdmin={activeAdmin}/>: null }
    
    <div className='contenedor-admins'>
      <h3 className='center marginTop-10'>Administradores</h3>

      <div className='tableAdmins'>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            onSelectionModelChange={(ids) => {
              dispatch(adminActive(ids[0]));
            }}
          />
        </div>
      </div>

      <BotonAdd name={'administrador'} casillas={casillas}/>
      { activeAdmin ? <BotonDelete name={'administrador'} activeElement={activeAdmin}/> : '' }

    </div>
    </>
    
  )
}