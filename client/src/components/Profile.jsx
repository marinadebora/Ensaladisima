import React,{useState} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import loginLogo from "../images/loginLogo.png";
import axios from 'axios';
import { useLocalStorage } from '../useLocalStorage';
import "../styles/Profile.css";
import NavBar from './NavBar';

export default function PersonalProfile() {
  const usuario=JSON.parse(localStorage.getItem('loguearUsuario'))

  let [imagenCloud, setImagenCloud] = useLocalStorage('imagenClod', '')
  let cargarImg=imagenCloud?.email===usuario?.email&&imagenCloud?.img
  const [edit, setEdit] = useState(false)
  console.log(usuario)
function editar(){
  setEdit(true)
}
  const cloudinary = async (files) =>{
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "qji2i4gs");

    let response = await axios.post("https://api.cloudinary.com/v1_1/deqbqghhq/image/upload",formData)
    setImagenCloud({img:response.data.url,email:usuario.email})
    setEdit(false)
  };

  const sesion = ()=>{
    return(
      <section className="vh-100" style={{ backgroundColor: "#94D2DE", paddingTop: "100px"  }}>
      <MDBContainer className="py-5 h-100" style={{ backgroundColor: "#94D2DE"}}>
        <MDBRow className="justify-content-center align-items-center h-100" style={{ backgroundColor: "#94D2DE"}}>
          <MDBCol lg="6" className="mb-4 mb-lg-0" style={{ backgroundColor: "#207140", paddingTop:"12px", paddingBottom:"10px" }}>
            <MDBCard className="mb-3" style={{ padding:"10px", backgroundColor: "#94D2DE"}}>
              <MDBRow className="g-0" >
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={cargarImg?cargarImg:loginLogo}
                    alt="Avatar" className="my-5 mb-3" style={{ borderRadius:"100px", width: '80px', height:'80px' }} fluid />
                    <button id="buttonEdit" onClick={editar}>
                    <MDBCardText style={{backgroundColor:"transparent", color:"white", fontFamily:"Tommy-light", textAlign:"center"}}>Editar</MDBCardText></button>
  
                      
                    {
                      edit&& <MDBInput
                      id="inputEdit"
                      type="file"
                      size="sm"
                      onChange={event => cloudinary(event.target.files)}
                       ></MDBInput>
                    }

                 {/*  <MDBTypography tag="h5"style={{color:"#207140", fontFamily:"Tommy-light"}}>{usuario.firstName + ' ' +usuario?.lastName }</MDBTypography> */}

                  {/* <MDBCardText style={{color:"#207140", fontFamily:"Tommy-light"}}>Web Designer</MDBCardText> */}
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6" style={{color:"#207140", fontFamily:"Tommy-regular"}}>Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6" style={{color:"#207140", fontFamily:"Tommy-regular"}}>Usuario</MDBTypography>

                        <MDBCardText style={{color:"#207140", fontFamily:"Tommy-light"}}>{usuario.firstName + ' ' +usuario?.lastName }</MDBCardText>


                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6" style={{color:"#207140", fontFamily:"Tommy-regular"}}>Email</MDBTypography>
                        <MDBCardText style={{color:"#207140", fontFamily:"Tommy-light"}}>{usuario.email}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    {/* <MDBTypography tag="h6" style={{color:"#207140", fontFamily:"Tommy-regular"}}>Information</MDBTypography> */}
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6" style={{color:"#207140", fontFamily:"Tommy-regular"}}>Direccion</MDBTypography>
                        <MDBCardText style={{color:"#207140", fontFamily:"Tommy-light"}}>{usuario.adress}</MDBCardText>
                      </MDBCol>
                      {/* <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6" style={{color:"#207140", fontFamily:"Tommy-regular"}}>Phone</MDBTypography>
                        <MDBCardText style={{color:"#207140", fontFamily:"Tommy-light"}}>123 456 789</MDBCardText>
                      </MDBCol> */}
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    )
  }
  return (
    <div >
      <NavBar/>
    {
      usuario?
      sesion():
      <div style={{ paddingTop: "7%" ,}}>
        
        <h3 style={{color:"#207140", fontFamily:"Tommy-light", paddingBottom:"9%" ,paddingTop: "12%",display:'flex', justifyContent:'center', alignContent:'center' }}>Inicia sesion para ver tu descripcion</h3>
      </div>
      
    }
    </div>
  );
}
