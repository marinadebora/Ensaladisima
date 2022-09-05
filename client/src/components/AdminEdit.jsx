import { bases } from "../action";
import CardSimple from "./CardSimple";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";



export default function AdminEdit(){
    let { id } = useParams()
    const  bases1 = useSelector(state => state.bases)
    const dispatch = useDispatch()

    useEffect ( () => {
        dispatch(bases(id))
    },[dispatch,id])
    return (
      <div>
      {
        bases1 ?
      bases1.map(e => {
        return (
          <div key={e._id}>
            <CardSimple
              name={e.name}
              image={e.image}
              _id={e._id}

            />
          </div>
        )
      }):<h1>Cargandoo</h1>
    }
    </div>
    )
}

