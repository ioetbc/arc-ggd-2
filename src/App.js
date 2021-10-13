import react, { useEffect, useState } from "react";
import simpleParallax from "simple-parallax-js";
import logo from "./logo.svg";
import "./App.css";

const shorts = [
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 90,
    offset: {
      x: 0,
      y: 150,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 70,
    offset: {
      x: 10,
      y: 60,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 20,
    offset: {
      x: 100,
      y: 150,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 50,
    offset: {
      x: 100,
      y: 150,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 30,
    offset: {
      x: 200,
      y: 0,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 20,
    offset: {
      x: 300,
      y: 50,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 90,
    offset: {
      x: 0,
      y: 50,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 30,
    offset: {
      x: 100,
      y: 150,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 40,
    offset: {
      x: 300,
      y: 150,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 80,
    offset: {
      x: 100,
      y: 50,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 20,
    offset: {
      x: 200,
      y: -50,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 50,
    offset: {
      x: 100,
      y: 100,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 10,
    offset: {
      x: 200,
      y: 30,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 60,
    offset: {
      x: 100,
      y: 50,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 90,
    offset: {
      x: 100,
      y: 50,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 20,
    offset: {
      x: 100,
      y: 50,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 70,
    offset: {
      x: 100,
      y: 50,
    },
  },
  {
    placeholderURL:
      "https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png",
    URL: "https://uploads-ssl.webflow.com/5e9fe777748507384627888f/612555bbf9d7d282dc3da570_Arc%20Cadence%20700x935.jpg",
    parallex: 40,
    offset: {
      x: 100,
      y: 50,
    },
  },
];

function App() {
  useEffect(() => {
    if (!!window.IntersectionObserver) {
      const options = {
        threshold: 0.2,
      };
      window.scrollTo(window.innerWidth * 1.5, window.innerHeight * 1.5);
      let hasLoadedInitialSection = false;
      const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          const offset = shorts.map((item) => item.offset);
          if (entry.isIntersecting) {
            if (!hasLoadedInitialSection) {
              hasLoadedInitialSection = true;
              entry.target.childNodes.forEach((image, index) => {
                const pLeft =
                  entry.target.getBoundingClientRect().left / window.scrollX +
                  offset[index].x;
                const pTop =
                  entry.target.getBoundingClientRect().top / window.scrollY +
                  offset[index].y;

                image.setAttribute(
                  "style",
                  `transform: translate3d(${pLeft}px, ${pTop}px, 0); opacity: 1;`
                );
              });
            }

            entry.target.onwheel = () => {
              entry.target.childNodes.forEach((image, index) => {
                const speeds = shorts.map((item) => item.parallex);
                console.log("window.scrollX", window.scrollX);
                const pLeft =
                  (entry.target.getBoundingClientRect().left / window.scrollX) *
                    100 *
                    speeds[index] +
                  offset[index].x;

                const pTop =
                  (entry.target.getBoundingClientRect().top / window.scrollY) *
                    100 *
                    speeds[index] +
                  offset[index].y;

                image.setAttribute(
                  "style",
                  `transform: translate3d(${pLeft}px, ${pTop}px, 0); opacity: 1;`
                );
              });
            };
          }
        });
      }, options);
      document
        .querySelectorAll(".section")
        .forEach((section) => sectionObserver.observe(section));
    }
  }, []);

  return (
    <div className="App">
      <div className="section bg-red">
        {shorts.map((image) => (
          <img src={image.URL} data-src={image.placeholderURL} />
        ))}
      </div>
      <div className="section bg-yellow">
        {shorts.map((image) => (
          <img src={image.URL} data-src={image.placeholderURL} />
        ))}
      </div>
      <div className="section bg-pink">
        {shorts.map((image) => (
          <img src={image.URL} data-src={image.placeholderURL} />
        ))}
      </div>
      <div className="section bg-orange">
        {shorts.map((image) => (
          <img src={image.URL} data-src={image.placeholderURL} />
        ))}
      </div>
      <div className="section bg-green">
        {shorts.map((image) => (
          <img src={image.URL} data-src={image.placeholderURL} />
        ))}
      </div>
      <div className="section bg-purple">
        {shorts.map((image) => (
          <img src={image.URL} data-src={image.placeholderURL} />
        ))}
      </div>
      <div className="section bg-darksalmon">
        {shorts.map((image) => (
          <img src={image.URL} data-src={image.placeholderURL} />
        ))}
      </div>
      <div className="section bg-darkturquoise">
        {shorts.map((image) => (
          <img src={image.URL} data-src={image.placeholderURL} />
        ))}
      </div>
      <div className="section bg-lightgoldenrodyellow">
        {shorts.map((image) => (
          <img src={image.URL} data-src={image.placeholderURL} />
        ))}
      </div>
    </div>
  );
}

export default App;
