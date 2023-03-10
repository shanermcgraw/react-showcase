import { createContext } from "react";

export const FilterContext = createContext({
  filters: [],
  addFilter: (filter) => {},
  removeFilter: (filter) => {},
});
