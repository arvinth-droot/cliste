import classes from "./page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Description from "@/components/description";
import Community from "@/components/community";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <main className={classes.a}>
      <Header />
      <Hero />
      <Description />
      <Community />
      <Faq/>
    </main>
  );
}
