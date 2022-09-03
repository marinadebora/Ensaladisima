import React, { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



// function validate(input) {
//     let errors = {}
//     if (!input.name) errors.name = "Campo Obligatorio"
//     if (!(/^[a-zA-Z-\s]+$/).test(input.name)) errors.name = "No puede contener numeros ni caracteres especiales"
//     return errors
//   }




export default function RecipeCreate() {
    const dispatch = useDispatch()
    const { } = useSelector(state => state)
  
    const navigate = useNavigate()
  
    const [input, setInput] = useState({
      name: "",
      image: "",

    })






    return (
        <div>

        </div>
    )
}