import {
    /* MDBBtn, */
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
    import React from "react";
    import { Link } from 'react-router-dom';
    
    export default function QuantityEdit() {
    return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#94D2DE", paddingTop: "100px" }}>
      <MDBContainer className="py-5 h-100" style={{ backgroundColor: "#94D2DE"}}>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12" style={{ backgroundColor: "#207140", paddingTop:"12px", paddingBottom:"12px" }}>
            <MDBCard className="card-registration card-registration-2">
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography tag="h2" className="fw-bold mb-0 text-black" style={{ color: "#207140", fontFamily:"Tommy-regular"}}>
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          3 items
                        </MDBTypography>
                      </div>
    
                      <hr className="my-4" />
    
                      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                            fluid className="rounded-3" alt="Cotton T-shirt" />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <MDBTypography tag="h6" className="text-muted">
                            Shirt
                          </MDBTypography>
                          <MDBTypography tag="h6" className="text-black mb-0">
                            Cotton T-shirt
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                          
    
                          <MDBInput type="number" min="0" defaultValue={1} size="sm" />
    
                         
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="text-end">
                          <MDBTypography tag="h6" className="mb-0">
                            € 44.00
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-muted">
                            <MDBIcon fas icon="times" />
                          </a>
                        </MDBCol>
                      </MDBRow>
    
                      <hr className="my-4" />
    
    
                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                            to shop
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1" style={{ color: "#207140", fontFamily:"Tommy-regular"}}>
                        Summary
                      </MDBTypography>
    
                      <hr className="my-4" />
    
                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          items 3
                        </MDBTypography>
                        <MDBTypography tag="h5">€ 132.00</MDBTypography>
                      </div>
    
                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Shipping
                      </MDBTypography>
    
                      <div className="mb-4 pb-2">
                        <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                          <option value="1">TAKE AWAY</option>
                          <option value="2">DIRECCION 1</option>
                          <option value="3">DIRECCION 2</option>
                          <option value="4">DIRECCION 3</option>
                        </select>
                      </div>
    
                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Comentarios
                      </MDBTypography>
    
                      <div className="mb-5">
                        <MDBInput size="lg"/>
                      </div>
    
                      <hr className="my-4" />
    
                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">€ 137.00</MDBTypography>
                      </div>
    
                      <Link class="buttonChico" to="/">Regitrate</Link>
                      <Link class="buttonChico" to="/">Comprar</Link>

                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
    }