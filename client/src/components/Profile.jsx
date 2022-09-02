import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import loginLogo from "../images/loginLogo.png";

export default function PersonalProfile() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#94D2DE", paddingTop: "100px"  }}>
      <MDBContainer className="py-5 h-100" style={{ backgroundColor: "#94D2DE"}}>
        <MDBRow className="justify-content-center align-items-center h-100" style={{ backgroundColor: "#94D2DE"}}>
          <MDBCol lg="6" className="mb-4 mb-lg-0" style={{ backgroundColor: "#207140", paddingTop:"12px", paddingBottom:"10px" }}>
            <MDBCard className="mb-3" style={{ padding:"10px", backgroundColor: "#94D2DE"}}>
              <MDBRow className="g-0" >
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={loginLogo}
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5"style={{color:"#207140", fontFamily:"Tommy-light"}}>Marie Horwitz</MDBTypography>
                  <MDBCardText style={{color:"#207140", fontFamily:"Tommy-light"}}>Web Designer</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6" style={{color:"#207140", fontFamily:"Tommy-regular"}}>Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6" style={{color:"#207140", fontFamily:"Tommy-regular"}}>Email</MDBTypography>
                        <MDBCardText style={{color:"#207140", fontFamily:"Tommy-light"}}>info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6" style={{color:"#207140", fontFamily:"Tommy-regular"}}>Phone</MDBTypography>
                        <MDBCardText style={{color:"#207140", fontFamily:"Tommy-light"}}>123 456 789</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6" style={{color:"#207140", fontFamily:"Tommy-regular"}}>Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6" style={{color:"#207140", fontFamily:"Tommy-regular"}}>Email</MDBTypography>
                        <MDBCardText style={{color:"#207140", fontFamily:"Tommy-light"}}>info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6" style={{color:"#207140", fontFamily:"Tommy-regular"}}>Phone</MDBTypography>
                        <MDBCardText style={{color:"#207140", fontFamily:"Tommy-light"}}>123 456 789</MDBCardText>
                      </MDBCol>
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
  );
}