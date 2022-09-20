import { animated, useSpring, easings } from "@react-spring/web";
import { useEffect, useState } from "react";
function App({ children }: any) {
  const [isVisible, setIsVisible] = useState(false);
  const [local, setLocal] = useState(false);
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    width: "100%",
    height: "100%",
    config: {
      duration: 1000,
      easing: easings.easeInOutQuart,
    },
  });

  useEffect(() => {
    setIsVisible(true);
  });
  return (
    <div className="w-full h-screen grid place-items-center bg-neutral-800 grid-rows-3 text-white">
      <h1 className=" text-4xl text-center">The Borseth Server</h1>
      <div className="border-y w-full h-full grid grid-cols-3 justify-between p-5 items-center gap-5">
        <animated.div style={styles}>
          <a
            href={
              local
                ? "http://10.0.0.251:20489"
                : "https://info.borsethserver.online"
            }
            className="w-full text-center h-full grid place-items-center bg-slate-800 hover:scale-90 transition-all"
          >
            Server Status
          </a>
        </animated.div>
        <animated.div style={styles}>
          <a
            href={
              local
                ? "http://10.0.0.251:8096"
                : "https://watch.borsethserver.online"
            }
            target="_blank"
            className="w-full text-center h-full grid place-items-center bg-slate-800 hover:scale-90 transition-all"
          >
            Jellyfin Web Client
          </a>
        </animated.div>
        <animated.div style={styles}>
          <a
            href={
              local ? "http://10.0.0.251" : "https://nas.borsethserver.online"
            }
            target="_blank"
            className="w-full text-center h-full grid place-items-center bg-slate-800 hover:scale-90 transition-all"
          >
            TrueNas Login
          </a>
        </animated.div>
      </div>
      <footer className="w-full h-full grid">
        <button
          className={`bg-${
            local ? "green" : "red"
          }-500 w-1/3 justify-self-center mt-4 hover:scale-105 transition-all`}
          onClick={() => {
            setLocal(!local);
          }}
        >
          Local?
        </button>
        <div className="text-sm h-full flex items-end py-5 justify-center">
          <a href="https://jedborseth.com">Jed Borseth &copy; 2022</a>
        </div>
      </footer>
      <span className="hidden bg-green-500 bg-red-500"></span>
    </div>
  );
}

export default App;
