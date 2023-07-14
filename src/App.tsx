import { useTranslation } from "react-i18next";

import Router from "./routes/router";

const App = () => {
  const { t } = useTranslation()

  return (
    <Router />
  )
}

export default App;
