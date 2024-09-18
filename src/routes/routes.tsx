import { Routes as Router, Route } from "react-router-dom"
import { AuthPage, NotFoundPage, ProductsPage, ProfilePage, UsersPage } from "@/pages"
import { MiddlewareRoutes } from "./MiddlewareRoutes"
import { Paths } from "@/config"

export const Routes = () => {
  const {
    AUTH,
    ROOT,
    PRODUCTS,
    USERS,
    PROFILE
  } = Paths;

  return (
    <Router>
      <Route path={"*"} element={<NotFoundPage />} />
      <Route path={AUTH} element={<AuthPage />} />
      <Route path={ROOT} element={<MiddlewareRoutes />}>
        <Route path={ROOT} element={<ProductsPage />} />
        <Route path={PROFILE} element={<ProfilePage />} />
        <Route path={PRODUCTS} element={<ProductsPage />} />
        <Route path={USERS} element={<UsersPage />} />
      </Route>
    </Router>
  )
}