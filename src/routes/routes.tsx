import { Routes as Router, Route } from "react-router-dom"
import { AuthPage, DashboardPage, NotFoundPage, ProductsPage, StockPage, UsersPage } from "@/pages"
import { MiddlewareRoutes } from "./MiddlewareRoutes"
import { Paths } from "@/config"
import { ReportsPage } from "@/pages/reports"

export const Routes = () => {
  const { AUTH, ROOT, DASHBOARD, STOCK, PRODUCTS, USERS, REPORTS } = Paths;

  return (
    <Router>
      <Route path={"*"} element={<NotFoundPage />} />
      <Route path={AUTH} element={<AuthPage />} />
      <Route path={ROOT} element={<MiddlewareRoutes />}>
        <Route path={ROOT} element={<DashboardPage />} />
        <Route path={DASHBOARD} element={<DashboardPage />} />
        <Route path={PRODUCTS} element={<ProductsPage />} />
        <Route path={STOCK} element={<StockPage />} />
        <Route path={USERS} element={<UsersPage />} />
        <Route path={REPORTS} element={<ReportsPage />} />
      </Route>
    </Router>
  )
}