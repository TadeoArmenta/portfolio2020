import React, { useState, useEffect } from "react";
import axios from 'axios';
import Particles from "react-particles-js";
import Socialicons from "../components/Socialicons";
import Layout from "../components/Layout";
import CookieConsent from "react-cookie-consent";

function Home(){
  const [information, setInformation] = useState("");
  const paramConfig = {
    particles: {
      number: {
        value: 160,
        density: {
          enable: false
        }
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        random: true,
        speed: 1,
        direction: "top",
        out_mode: "out"
      }
    }
  };
  useEffect(() =>{
    axios.get('/api/information')
    .then( response => {
      setInformation(response.data);
    })
  }, [])
  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <Particles className="mi-home-particle" params={paramConfig} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, I'm <span className="color-theme">{information.name}</span>
                </h1>
                <p>{information.aboutContent}</p>
                <Socialicons bordered />
                <CookieConsent location="bottom" cookieName="eu-Cookie" expires={999} overlay
                  style={{
                    background: "#10121b",
                    textShadow: "1px 0px white",
                  }}
                  buttonStyle={{ background:"#04b790", color: "#000000", fontSize: "13px" }}
                  >
                  This website uses cookies to enhance the user experience.
                </CookieConsent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
