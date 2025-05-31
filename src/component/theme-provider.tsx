import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import useSound from "use-sound";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  musicEnabled?: boolean;
  setMusicEnabled: (enabled: boolean) => void;
  playSharedClick: () => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
  musicEnabled: true,
  setMusicEnabled: () => null,
  playSharedClick: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [playClick] = useSound("/click.mp3", { soundEnabled: musicEnabled });
  const playSharedClick = useCallback(() => {
    playClick();
  }, [playClick]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme);
      localStorage.setItem(storageKey, newTheme);
    },
    musicEnabled,
    setMusicEnabled: (enabled: boolean) => {
      setMusicEnabled(enabled);
    },
    playSharedClick,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
