import * as React from "react";

export const DataContext = React.createContext({
  data: [],
  setContextData: (data) => {},
});
