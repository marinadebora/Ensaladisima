import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux"
import { getPedidos, historialCompra, historialId } from "../action";
import CardDetalleHistorial from "./CardDetalleHistorial";
import CardDetalleHistorialBebidas from "./CardDetailBebidas";
import CardDetalleHistorialPostres from "./CardHistorialPostres";



export default function DetalleHistorial() {
  const { pedidos } = useSelector(state => state)
  const { historialDetail } = useSelector(state => state)
  const dispatch = useDispatch()
  const { _id } = useParams()
  useEffect(() => {
    dispatch(historialCompra())
    dispatch(getPedidos())
    dispatch(historialId(_id))
  }, [dispatch, _id])
  const buscar = pedidos?.find(e => e._id === historialDetail?.orders[0]?._id)
  // console.log(buscar.desserts)

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/admin_ordenes"><button>Volver</button></Link>
      {
        buscar?.salads ?
          buscar?.salads.map(e => {
            return (
              <div>
                <CardDetalleHistorial
                  name={e.name}
                  base={e.base?.join(", ")}
                  topping={e.topping?.join(", ")}
                  sauce={e.sauce?.join(", ")}
                  complement={e.complement?.join(", ")}
                  protein={e.protein?.join(", ")}
                  price={e.price}
                />
              </div>
            )
          })
          : <></>

      }
      
      { 
        buscar?.beverages?
        buscar?.beverages?.map(e=>{
          return (
            <div>
              <CardDetalleHistorialBebidas
              bebidaName={e.name}
              bebidaPrecio={e.price}
              />
            </div>
          )
        }):<></>
      }
      {
        buscar?.desserts?
        buscar?.desserts?.map(e=>{
          return (
            <div>
              <CardDetalleHistorialPostres
              postresName={e.name}
              postresPrecio={e.price}
              />
            </div>
          )
        }):<></>
      }
    </div>
  )
}