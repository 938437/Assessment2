import Head from "next/head";
import Header from "@/components/Header";
import Onboarding from "@/components/Onboarding"
import Features from "@/components/Features";
import PricingCards from "@/components/PricingCards";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/logo.svg" />
        <title>Orbit.</title>
      </Head>
      <main className={`flex min-h-screen flex-col items-center pt-10 pl-10 pr-10`}>
        <Header/>
        <Onboarding/>
        <Features/>
        <PricingCards/>
        <Newsletter/>
        <Footer/>
      </main>
    </div>
  );
}
