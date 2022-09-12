// npm i @mui/x-data-grid

import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit';
import { BotonAdd } from '../interface/BotonAdd';
import { useDispatch, useSelector } from 'react-redux';
import { BotonDelete } from '../interface/BotonDelete';
import { useContactoStore } from '../../hooks/useContactoStore';
import { ClienteUpdate } from '../interface/ClientesUpdate';
import { contactosActive } from '../../store/contacto/contactoSlice';

export const Clientes = () => {

  const dispatch = useDispatch();
  const { startLoadingContacto } = useContactoStore();
  const { contactos, activeContacto } = useSelector( state => state.contacto)

  const [visibilidad, setVisibilidad] = useState(false)

  const onEdit = () => {
    setVisibilidad(!visibilidad)
  } 

  useEffect(() => {
    startLoadingContacto();
  }, [ ])

  const casillas = [
    'nombre',
    'email',
    'telefono',
    'mensaje',
    'modo',
    'fecha',
    'hora',
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nombre', headerName: 'Nombre', width: 220 },
    { field: 'email', headerName: 'Email', width: 260 },
    { field: 'telefono', headerName: 'Telefono', width: 160 },
    { field: 'mensaje', headerName: 'Mensaje', width: 160 },
    { field: 'modo', headerName: 'Modo', width: 100 },
    { field: 'fecha', headerName: 'Fecha', width: 130 },
    { field: 'hora', headerName: 'Hora', width: 130 },   
    { field: 'editar', headerName: '', width: 50, renderCell: () => {
      return (
        <>
          <EditIcon sx={{ fontSize: 25, marginRight: 2 }} onClick={onEdit}/>
        </>
      );
    }},
  ];
  
  const rows = contactos.map( element => (
    { id: element.id,
      nombre: element.nombre,
      email: element.email,
      telefono: element.telefono,
      mensaje: element.mensaje,
      modo: element.modo,
      fecha: element.fecha,
      hora: element.hora }
  )); 

  return (
    <>
      { visibilidad ? <ClienteUpdate name={'contacto'} contactos={contactos} activeContacto={activeContacto}/>: null }
    <div className='contenedor-stock'>
      <h3 className='center marginTop-10'>Clientes</h3>

      <div className='contenedor-table'>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            onSelectionModelChange={(ids) => {
              dispatch(contactosActive(ids[0]));
            }}
          />
        </div>
      </div>
      <BotonAdd name={'clientes'} casillas={casillas}/>
      { activeContacto ? <BotonDelete name={'clientes'} activeElement={activeContacto}/> : '' }
    </div>
    </>
    
  )
}

