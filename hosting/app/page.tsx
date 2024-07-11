import "./globals.css"

// import components
import { Navbar } from "./components/navbar";
import { Body } from "./components/body";
import { Footer } from "./components/footer";

export default function Page() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <Body />
        <Footer />
      </main>
    </>
  )
}
