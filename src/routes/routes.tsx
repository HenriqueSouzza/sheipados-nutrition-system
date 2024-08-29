import { Routes as Router, Route } from "react-router-dom"
import { AuthPage, DashboardPage, NotFoundPage, ProductsPage, StockPage } from "@/pages"
import { Middleware } from "./middleware"

export const Routes = () => {
  return (
    <Router>
      <Route path={"*"} element={<NotFoundPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<Middleware />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/stock" element={<StockPage />} />
      </Route>
    </Router>
  )
}