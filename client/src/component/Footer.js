import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { useLangContext } from "../context/langContext";

export default function Footer() {
  const { langData } = useLangContext()

  return (
    <MDBFooter
      className=""
      color="black"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      <MDBContainer className="p-5">
        <section className="">
          <MDBRow>
            <MDBCol xl="3" lg="4" md="3" sm="6" className="mb-4 mx-auto">
              <b>{langData.component.footer.text1}</b>

              <p className="list-unstyled mb-0">
              {langData.component.footer.text2}
              </p>
            </MDBCol>

            <MDBCol xl="2" lg="2" md="2" sm="6" className="mb-4 mx-auto">
              <h6 className="mb-4">{langData.component.footer.productTitle}</h6>

              <ul className="list-unstyled mb-0">
                <li>
                  <p>
                    <a href="#!" className="text-dark">
                    {langData.component.footer.productContent1}
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!" className="text-dark">
                    {langData.component.footer.productContent2}
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!" className="text-dark">
                    {langData.component.footer.productContent3}
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!" className="text-dark">
                    {langData.component.footer.productContent4}
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!" className="text-dark">
                    {langData.component.footer.productContent5}
                    </a>
                  </p>
                </li>
              </ul>
            </MDBCol>

            <MDBCol xl="2" lg="2" md="2" sm="6" className="mb-4 mx-auto">
              <h6 className="mb-4">{langData.component.footer.aboutTitle}</h6>

              <ul className="list-unstyled mb-0">
                <li>
                  <p>
                    <a href="#!" className="text-dark">
                    {langData.component.footer.aboutContent1}
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!" className="text-dark">
                    {langData.component.footer.aboutContent2}
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!" className="text-dark">
                    {langData.component.footer.aboutContent3}
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!" className="text-dark">
                    {langData.component.footer.aboutContent4}
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!" className="text-dark">
                    {langData.component.footer.aboutContent5}
                    </a>
                  </p>
                </li>
              </ul>
            </MDBCol>

            <MDBCol
              xl="2"
              lg="2"
              md="2"
              sm="6"
              className="mx-auto mb-md-0 mb-4"
            >
              <h6 className="mb-4">{langData.component.footer.mediaTitle}</h6>

              <ul className="list-unstyled mb-0">
                <li>
                  <p>
                    <a href="#!" className="text-dark">
                    {langData.component.footer.mediaContent1}
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!" className="text-dark">
                    {langData.component.footer.mediaContent2}
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#!" className="text-dark">
                    {langData.component.footer.mediaContent3}
                    </a>
                  </p>
                </li>
                <li>
                  <p className="d-flex">
                    <a href="https://www.facebook.com">
                      <FaFacebook className="social-icon me-3" />
                    </a>
                    | 
                    <a href="https://twitter.com">
                      <FaTwitter className="social-icon ms-1 me-3" />
                    </a>
                    | 
                    <a href="http://www.instagram.com">
                      <FaInstagram className="social-icon ms-1 me-3" />
                    </a>
                    | 
                    <a href="https://www.linkedin.com/">
                      <FaLinkedin className="social-icon ms-1 me-3" />
                    </a>
                  </p>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className="text-center p-3">
        <a className="text-dark text-decoration-none" href="https://mdbootstrap.com/">
          © 2010-2022 tellows
        </a>
      </div>
    </MDBFooter>
  );
}
