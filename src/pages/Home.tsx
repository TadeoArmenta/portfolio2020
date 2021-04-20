import React, { useState, useEffect } from "react";
import axios from 'axios';
import Particles, { IParticlesParams } from "react-particles-js";
import Socialicons from "../components/Socialicons";
import Layout from "../components/Layout";
import CookieConsent from "react-cookie-consent";
import { Iinformation } from "data/interfaces/interfaces";

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
function Home(){
  const [information, setInformation] = useState<Iinformation | undefined >(undefined);
  const [abouttext, setAboutText] = useState<string[]>([]);
  const paramConfig:IParticlesParams = {
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
      setAboutText(response.data.higlightedWords)
    })
  }, [])

  const element = "span";

  const higlightedWords = abouttext.reduce(
    (prev: any[], word:string) => {
      const newWords:any[] = [];
      const reg = new RegExp(escapeRegExp(word), "gi");
      let index;

      prev.forEach(e => {
        // Only match for element which is string, if it is not string,
        // it's already processed(like span or something)
        if (typeof e === "string") {
          const wordLength = word.length;
          let matched = false;

          do {
            const { index } = reg.exec(e) || {};

            // Keep matching till no more matches found
            if (index !== undefined) {
              newWords.push(e.substr(0, index));
              newWords.push(
                React.createElement(
                  element,
                  {
                    key: `position-${newWords.length}-${index}`,
                    className: "color-theme"
                  },
                  e.substr(index, wordLength)
                )
              );
              // You can also directly use span here instead of React.createElement
              // newWords.push(<span className="color-theme">{e.substr(index, wordLength)}</span>);
              newWords.push(e.substr(index + wordLength));
              matched = true;
            }
          } while (index);

          // If word is not matched, push original sentence
          if (!matched) {
            newWords.push(e);
          }
        } else {
          // Push processed element as it is
          newWords.push(e);
        }
      });

      return newWords;
    },
    [information?.aboutContent]
  );

  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <Particles className="mi-home-particle" params={paramConfig} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, I'm <span className="color-theme">{information?.shortName},</span>
                </h1>
                <h2><span>{information?.titleContent}.</span></h2>
                <p>{higlightedWords}</p>
                <p><span >{information?.reachme}</span></p>
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
