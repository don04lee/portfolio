import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function OChemRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OChemRxn />}>
          <Route index element={<OChemLandingPage />}></Route>
          <Route path="product-predict" element={<OChemPredict />}></Route>
          <Route path="history" element={<OChemHistory />}></Route>
          <Route path="api-key" element={<OChemAPIKey />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
