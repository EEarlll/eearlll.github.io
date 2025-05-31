import Wave from "react-wavify";
import MainTab from "./component/MainTab";
import { SourceCode } from "./component/IconSvg";
import { ThemeProvider, useTheme } from "./component/theme-provider";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import bgm from "/bgm.mp3";

function AppContent() {
  const { theme, setTheme, musicEnabled, setMusicEnabled } = useTheme();
  const [bgPlaying, setBgPlaying] = useState(false);
  const [play, { stop }] = useSound(bgm, {
    volume: 0.1,
    soundEnabled: musicEnabled,
    onend: () => {
      setBgPlaying(false);
    },
  });
  
  useEffect(() => {
    if (!musicEnabled) {
      stop();
      setBgPlaying(false);
    }
  }, [musicEnabled]);
  const [playClick] = useSound("/click.mp3", { soundEnabled: musicEnabled });

  return (
    <div className="flex flex-col h-screen dark:bg-background">
      <header className="flex gap-4 p-8">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            if (!bgPlaying) {
              setBgPlaying(true);
              play();
            } else {
              setBgPlaying(false);
              stop();
            }
          }}
          style={
            bgPlaying
              ? { color: "#f59300" }
              : {
                  color: `${theme === "light" ? "#424242" : "#bdbdbd"}`,
                  opacity: "0.3",
                }
          }
          className="w-8 h-8 stroke-current text-primary cursor-pointer transition hover:scale-105 duration-200"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM9 19V5L21 3V17M21 17C21 18.1046 19.6569 19 18 19C16.3431 19 15 18.1046 15 17C15 15.8954 16.3431 15 18 15C19.6569 15 21 15.8954 21 17ZM9 9L21 7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
        {musicEnabled ? (
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="sound-min"
            onClick={() => {
              setMusicEnabled?.(false);
            }}
            className="icon glyph fill-current text-text w-8 h-8 cursor-pointer transition hover:scale-105 duration-200"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15.54,16.54a1,1,0,0,1-.71-.3,1,1,0,0,1,0-1.41,4,4,0,0,0,0-5.66,1,1,0,0,1,1.41-1.41,6,6,0,0,1,0,8.48A1,1,0,0,1,15.54,16.54Z"></path>
              <path d="M11.38,4.08a1,1,0,0,0-1.09.21L6.59,8H4a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H6.59l3.7,3.71A1,1,0,0,0,11,20a.84.84,0,0,0,.38-.08A1,1,0,0,0,12,19V5A1,1,0,0,0,11.38,4.08Z"></path>
            </g>
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="sound-mute-alt"
            onClick={() => {
              setMusicEnabled?.(true);
            }}
            className="cursor-pointer transition hover:scale-105 duration-200 w-8 h-8 fill-current text-text"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M11.38,4.08a1,1,0,0,0-1.09.21L6.59,8H4a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H6.59l3.7,3.71A1,1,0,0,0,11,20a.84.84,0,0,0,.38-.08A1,1,0,0,0,12,19V5A1,1,0,0,0,11.38,4.08Z"></path>
              <path d="M16,15.5a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l5-5a1,1,0,0,1,1.42,1.42l-5,5A1,1,0,0,1,16,15.5Z"></path>
              <path d="M21,15.5a1,1,0,0,1-.71-.29l-5-5a1,1,0,0,1,1.42-1.42l5,5a1,1,0,0,1,0,1.42A1,1,0,0,1,21,15.5Z"></path>
            </g>
          </svg>
        )}

        {theme === "light" ? (
          <svg
            className="w-8 h-8 cursor-pointer transition hover:scale-105 duration-200 fill-current text-primary"
            onClick={() => {
              setTheme("dark");
              playClick();
            }}
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <circle
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  cx="32.003"
                  cy="32.005"
                  r="16.001"
                ></circle>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.001,31.997c0-2.211-1.789-4-4-4H4c-2.211,0-4,1.789-4,4 s1.789,4,4,4h4C10.212,35.997,12.001,34.208,12.001,31.997z"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.204,46.139l-2.832,2.833c-1.563,1.562-1.563,4.094,0,5.656 c1.562,1.562,4.094,1.562,5.657,0l2.833-2.832c1.562-1.562,1.562-4.095,0-5.657C16.298,44.576,13.767,44.576,12.204,46.139z"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.003,51.999c-2.211,0-4,1.789-4,4V60c0,2.211,1.789,4,4,4 s4-1.789,4-4l-0.004-4.001C36.003,53.788,34.21,51.999,32.003,51.999z"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M51.798,46.143c-1.559-1.566-4.091-1.566-5.653-0.004 s-1.562,4.095,0,5.657l2.829,2.828c1.562,1.57,4.094,1.562,5.656,0s1.566-4.09,0-5.656L51.798,46.143z"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M60.006,27.997l-4.009,0.008 c-2.203-0.008-3.992,1.781-3.992,3.992c-0.008,2.211,1.789,4,3.992,4h4.001c2.219,0.008,4-1.789,4-4 C64.002,29.79,62.217,27.997,60.006,27.997z"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M51.798,17.859l2.828-2.829c1.574-1.566,1.562-4.094,0-5.657 c-1.559-1.567-4.09-1.567-5.652-0.004l-2.829,2.836c-1.562,1.555-1.562,4.086,0,5.649C47.699,19.426,50.239,19.418,51.798,17.859z"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.003,11.995c2.207,0.016,4-1.789,4-3.992v-4 c0-2.219-1.789-4-4-4c-2.211-0.008-4,1.781-4,3.993l0.008,4.008C28.003,10.206,29.792,11.995,32.003,11.995z"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.212,17.855c1.555,1.562,4.079,1.562,5.646-0.004 c1.574-1.551,1.566-4.09,0.008-5.649l-2.829-2.828c-1.57-1.571-4.094-1.559-5.657,0c-1.575,1.559-1.575,4.09-0.012,5.653 L12.212,17.855z"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setTheme("light");
              playClick();
            }}
            className="w-8 h-8 cursor-pointer transition hover:scale-105 duration-200 fill-current text-primary"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>{" "}
            </g>
          </svg>
        )}
      </header>

      <main className="flex-auto">
        <div className="min-h-full flex flex-col justify-center items-center">
          <div className="flex flex-col w-full max-w-lg md:max-w-3xl md:min-h-[564px] rounded-xl z-10 md:mb-16 overflow-hidden md:border-2 md:border-accent md:bg-background boxShadowStyle">
            <MainTab />
          </div>
          <Wave
            fill={theme === "light" ? "#B9DDFF" : "#315F81"}
            paused={false}
            style={{
              height: "258px",
              position: "absolute",
              bottom: "0",
              zIndex: "1",
            }}
            options={{
              height: 10,
              amplitude: 20,
              speed: 0.3,
              points: 3,
            }}
          />
        </div>
      </main>
      <footer className="flex flex-col justify-center items-center z-[1] p-4 bg-[#B9DDFF] dark:bg-[#315F81]">
        <SourceCode />
        <p className="text-text">© 2025 Earl Eustacio.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
export default App;
