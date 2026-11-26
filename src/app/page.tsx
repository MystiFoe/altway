import { Audiences } from "@/components/Audiences";
import { Booking } from "@/components/Booking";
import { Colleges } from "@/components/Colleges";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mentor } from "@/components/Mentor";
import { Method } from "@/components/Method";
import { Principles } from "@/components/Principles";
import { Programmes } from "@/components/Programmes";
import { TrustStrip } from "@/components/TrustStrip";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Audiences />
        <Method />
        <Programmes />
        <Mentor />
        <Principles />
        <Colleges />
        <Faq />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
