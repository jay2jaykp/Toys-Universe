import React from "react";
import "./footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <>
      <MDBFooter className="text-white text-center text-lg-left footer_bgColor">
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <MDBNavbarBrand
                href="\Home"
                className="justify-content-center p-0 m-0"
              >
                <img src={logo} alt="logo" className="mw-100 header_logo" />
              </MDBNavbarBrand>
              <p className="mb-0 mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">Visit</h5>
              <ul className="list-unstyled">
                <li className="my-2">
                  <a href="#!" className="text-white">
                    Shop
                  </a>
                </li>
                <li className="my-2">
                  <a href="#!" className="text-white">
                    About
                  </a>
                </li>
                <li className="my-2">
                  <a href="#!" className="text-white">
                    Contact
                  </a>
                </li>
                <li className="my-2">
                  <a href="#!" className="text-white">
                    Stocklist
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">Information</h5>
              <ul className="list-unstyled">
                <li className="my-2">
                  <a href="#!" className="text-white">
                    FAQ
                  </a>
                </li>
                <li className="my-2">
                  <a href="#!" className="text-white">
                    Shipping & returns
                  </a>
                </li>
                <li className="my-2">
                  <a href="#!" className="text-white">
                    Store Policy
                  </a>
                </li>
                <li className="my-2">
                  <a href="#!" className="text-white">
                    Payment Methods
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase mb-3">Contact Us</h5>
              <ul className="list-unstyled">
                <li className="my-2">
                  <a href="#!" className="text-white">
                    123456-789
                  </a>
                </li>
                <li className="my-2">
                  <a href="#!" className="text-white">
                    info@gmail.com
                  </a>
                </li>
                <li className="mx-1 d-inline">
                  <a href="#!" className="text-white">
                    <MDBBtn size="sm" floating>
                      <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>
                  </a>
                </li>
                <li className="mx-1 d-inline">
                  <a href="#!">
                    <MDBBtn size="sm" floating>
                      <MDBIcon fab icon="instagram" />
                    </MDBBtn>
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-white" href="https://www.toysuniverse.in">
            toysuniverse.in
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;