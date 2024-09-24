
import { Header } from "@/components/Header/Header";
import "./globals.css";
import { ProductGrid } from "@/components/ProductGrid/ProductGrid";

export default function Home() {
  return (
    <div className="page--container">
      <Header restricted={ false }/>

      <ProductGrid />
    </div>
  );
}
