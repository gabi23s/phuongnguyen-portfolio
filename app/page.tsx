import Header from "./components/Header";
import Hero from "./components/Hero";
import WorkSection from "./components/WorkSection";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WorkSection />
        <About />
      </main>
      <Footer />
    </>
  );
}
