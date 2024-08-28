import { Routes as Router, Route } from "react-router-dom"
import { AuthPage, HomePage, NotFoundPage } from "../pages"
import { Middleware } from "./middleware"

export const Routes = () => {
  return (
    <Router>
      <Route path="/auth" element={<AuthPage />} />
      <Route path={"*"} element={<NotFoundPage />} />
      <Route path="/" element={<Middleware />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Router>
  )
}