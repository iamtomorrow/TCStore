
import { Header } from "@/components/Header/Header";
import "./globals.css";

export default function Home() {
  return (
    <div className="page--container">
      <Header restricted={ false }/>
    </div>
  );
}
