import ProductsClient from "./ProductsClient"

export const metadata = {
  title: "Products - Fresh Eggs from Akubuuza Farm",
  description:
    "Browse our selection of fresh, free-range eggs. Full trays, half trays, and bulk supply options available with fast delivery.",
}

export default function ProductsPage() {
  return <ProductsClient />
}
