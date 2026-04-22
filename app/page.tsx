import { LangProvider } from "./components/LangProvider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Process from "./components/Process";
import WorkSection from "./components/WorkSection";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Process />
        <WorkSection />
        <About />
      </main>
      <Footer />
    </LangProvider>
  );
}
