"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type AppContextProviderProps = {
  children: ReactNode;
};

type FiltersContextType = {
  sizes: string[];
  minRanges: number;
  maxRanges: number;
  userIsFiltering: boolean;
  setSizes: Dispatch<SetStateAction<string[]>>;
  setUserIsFiltering: Dispatch<SetStateAction<boolean>>;
  setRanges: (min: number | null, max: number | null) => void;
};

const FiltersContext = createContext<FiltersContextType>({
  sizes: [],
  minRanges: 10,
  maxRanges: 600,
  userIsFiltering: false,
  setSizes: () => {},
  setRanges: () => {},
  setUserIsFiltering: () => {},
});

export function FiltersProvider({ children }: AppContextProviderProps) {
  const [sizes, setSizes] = useState<string[]>([]);
  const [minRanges, setMinRanges] = useState<number>(10);
  const [maxRanges, setMaxRanges] = useState<number>(600);
  const [userIsFiltering, setUserIsFiltering] = useState<boolean>(false);

  const setRanges = (min: number | null, max: number | null) => {
    if (min) setMinRanges(min);
    if (max) setMaxRanges(max);
  };

  return (
    <FiltersContext.Provider
      value={{
        sizes,
        minRanges,
        maxRanges,
        userIsFiltering,
        setSizes,
        setRanges,
        setUserIsFiltering,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export function useFiltersContext() {
  const context = useContext(FiltersContext) as FiltersContextType;
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  const {
    sizes,
    minRanges,
    maxRanges,
    userIsFiltering,
    setSizes,
    setRanges,
    setUserIsFiltering,
  } = context;
  return {
    sizes,
    minRanges,
    maxRanges,
    userIsFiltering,
    setSizes,
    setRanges,
    setUserIsFiltering,
  };
}
