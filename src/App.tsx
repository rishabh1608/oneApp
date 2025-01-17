import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { StyledAppWrapper } from "./App.styles";
import apps from "./constants/Appbar.constants";
import { Appbar } from "./organisms";

function Loading() {
  return <h4> Loading </h4>;
}

function App() {
  return (
    <StyledAppWrapper>
      <Appbar />
      <Routes>
        {apps.map((app) => {
          const { Element, path, title } = app;
          return (
            <Route
              path={path}
              element={
                <Suspense fallback={<Loading />}>
                  <Element />
                </Suspense>
              }
              key={title}
            />
          );
        })}
      </Routes>
    </StyledAppWrapper>
  );
}

export default App;
