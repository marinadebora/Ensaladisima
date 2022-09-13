import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { searchBar, usuariosRegistrados } from "../action"
import React from "react"




export default function BusquedaPorNombre() {
    const dispatch = useDispatch()
    const [input, setInput] = useState("");

    useEffect(() => {
        dispatch(usuariosRegistrados())
    }, [dispatch])

    function handleSearch(e) {
        setInput(e.target.value)
        dispatch(searchBar(e.target.value))
        console.log(input)
      }

    //   function handleSubmit(e) {
    //     e.preventDefault()
    //     dispatch(searchBar(input))
    //     setInput("")
    //   }


      return  (
          < div >
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
            <input type="text" placeholder='Buscar...' value={input} onChange={(e) => handleSearch(e)}/>

      {/* <button type="Submit" onClick={(e) => handleSubmit(e)}>Buscar</button> */}
    </div>
        )
}