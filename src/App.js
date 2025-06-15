import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import Loading from "./components/Loading";

const Navbar = React.lazy(() => import("./layout/Navbar"));
const Footer = React.lazy(() => import("./layout/Footer"));
const AppRoutes = React.lazy(() => import("./routes/AppRoutes"));

function App() {
  const { i18n } = useTranslation();
  const language = i18n.language;

  return (
    <Suspense fallback={<Loading />}>
      <div
        className="w-full overflow-hidden"
        style={{ fontFamily: `${language === "en" ? "chivo" : "nrt"}` }}
        dir={`${language === "en" ? "ltr" : "rtl"}`}
      >
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
