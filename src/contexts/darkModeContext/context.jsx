import React from "react";

export const DarkModeContext = React.createContext({
	darkModeState: false,
	darkModeChanged: () => {},
});
