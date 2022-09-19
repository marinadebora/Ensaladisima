import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux"
import { getPedidos, historialCompra, historialId } from "../action";
import CardDetalleHistorial from "./CardDetalleHistorial";
import CardDetalleHistorialBebidas from "./CardDetailBebidas";



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


  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
    </div>
  )
}