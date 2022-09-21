import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { getPedidos, historialCompra, historialId } from "../action";
import CardDetalleHistorial from "./CardDetalleHistorial";
import CardDetalleHistorialBebidas from "./CardDetailBebidas";
import CardDetalleHistorialPostres from "./CardHistorialPostres";
import "../styles/DetalleHistoria.css";



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




  //console.log(buscar);
  // console.log(pedidos);

  return (
    <div id="detailHistorialContent">
      <br />
      
      
      <div id="buttonDetalleHistoriaContainer">
      <Link to="/admin_ordenes"><button id="buttonDetalleHistoria">Volver</button></Link>
      </div>
      <div class="container" id="detalleHistoriaContainer">
      
      
        {
          buscar?.salads ?
            buscar?.salads.map(e => {
              return (
                <div id="cardHistorialContainer">
                  <CardDetalleHistorial 

                    name={e.name}
                    base={e.base?.join(", ")}
                    protein={e.protein?.join(", ")}
                    complement={e.complement?.join(", ")}
                    sauce={e.sauce?.join(", ")}
                    topping={e.topping?.join(", ")}
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
    </div>
  )
}