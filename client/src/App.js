import React from "react";

import Main from "./Main";
import { LanguageProvider } from "./context/langContext";
import { AuthProvider } from "./context/authContext";
import { MyProvider } from "./context/myContext";

function App() {
  return (
    <MyProvider>
      <AuthProvider>
        <LanguageProvider>
          <Main />
        </LanguageProvider>
      </AuthProvider>
    </MyProvider>
  );
}

export default App;
