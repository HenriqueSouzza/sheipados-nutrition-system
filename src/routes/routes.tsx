import { Routes as Router, Route } from "react-router-dom"
import { AuthPage, NotFoundPage, ProductsCreatePage, ProductsEditPage, ProductsPage, ProfilePage, UsersPage } from "@/pages"
import { MiddlewareRoutes } from "./MiddlewareRoutes"
import { Paths } from "@/config"
import { CashPage } from "@/pages/cash"

export const Routes = () => {
  const {
    AUTH,
    ROOT,
    PRODUCTS,
    PRODUCTS_EDIT,
    PRODUCTS_NEW,
    USERS,
    PROFILE,
    CASH
  } = Paths;

  return (
    <Router>
      <Route path={"*"} element={<NotFoundPage />} />
      <Route path={AUTH} element={<AuthPage />} />
      <Route path={ROOT} element={<MiddlewareRoutes />}>
        <Route path={ROOT} element={<UsersPage />} />
        <Route path={PROFILE} element={<ProfilePage />} />
        <Route path={PRODUCTS} element={<ProductsPage />} />
        <Route path={PRODUCTS_EDIT} element={<ProductsEditPage />} />
        <Route path={PRODUCTS_NEW} element={<ProductsCreatePage />} />
        <Route path={USERS} element={<UsersPage />} />
        <Route path={CASH} element={<CashPage />} />
      </Route>
    </Router>
  )
}