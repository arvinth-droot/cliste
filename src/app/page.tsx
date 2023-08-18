import classes from "./page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Description from "@/components/description";
import Community from "@/components/community";
import Faq from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Recipe from "@/components/recipe";
import Slider from "@/components/slider";


export default function Home() {
  return (
    <main className={classes.a}>
      <Header />
      <Hero />
      <Description />
      <Slider />
      <Recipe />
      <Community />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
