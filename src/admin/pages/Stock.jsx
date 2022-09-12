// npm i @mui/x-data-grid

import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Avatar from "@mui/material/Avatar";
import EditIcon from '@mui/icons-material/Edit';
import { BotonAdd } from '../interface/BotonAdd';

import A1 from '../../img/productos/A1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { useStockStore } from '../../hooks/useStockStore';
import { StockUpdate } from '../interface/StockUpdate';
import { stockActive } from '../../store/Stock/stockSlice';
import { BotonDelete } from '../interface/BotonDelete';

export const Stock = () => {

  const dispatch = useDispatch();
  const { startLoadingStock } = useStockStore();
  const { stocks, activeStock } = useSelector( state => state.stock)

  const [visibilidad, setVisibilidad] = useState(false)

  const onEdit = () => {
    setVisibilidad(!visibilidad)
  } 

  useEffect(() => {
    startLoadingStock();
  }, [ ])

  const casillas = [
    'nombre',
    'stock',
    'comentario',
    'precio',
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'Nombre', headerName: 'Artesania', width: 200 },
    { field: 'Stock', headerName: 'Stock', width: 110 },
    { field: 'Comentario', headerName: 'Comentario', width: 250 },
    { field: 'Precio', headerName: 'Precio', width: 100 },
    { field: 'Avatar', headerName: '', width: 60, renderCell: (params) => {
      return (
        <>
          <Avatar src={A1}/>
        </>
      );
    }},
    { field: 'Editar', headerName: '', width: 50, renderCell: () => {
      return (
        <>
          <EditIcon sx={{ fontSize: 25, marginRight: 2 }} onClick={onEdit}/>
        </>
      );
    }},
  ];
  
  const rows = stocks.map( element => (
    { id: element.id, Nombre: element.nombre, Stock: element.stock, Comentario: element.comentario, Precio: element.precio, Avatar: element.avatar }
  )); 

  return (
    <>
      { visibilidad ? <StockUpdate name={'producto'} stocks={stocks} activeStock={activeStock}/>: null }
    <div className='contenedor-stock'>
      <h3 className='center marginTop-10'>Stock</h3>

      <div className='contenedor-table'>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            onSelectionModelChange={(ids) => {
              dispatch(stockActive(ids[0]));
            }}
          />
        </div>
      </div>
      <BotonAdd name={'producto'} casillas={casillas}/>
      { activeStock ? <BotonDelete name={'producto'} activeElement={activeStock}/> : '' }
    </div>
    </>
    
  )
}
