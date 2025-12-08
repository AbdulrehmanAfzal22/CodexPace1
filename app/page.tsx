import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Services from '@/components/Services';
import LatestProjects from '@/components/LatestProjects';
import IndustryExpertise from '@/components/IndustryExpertise';
// import WorkWithUs from '@/components/WorkWithUs';
import AboutCompany from '@/components/AboutCompany';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black relative overflow-x-hidden">
      <Header />
      <Hero />
      <TechStack />
      <Services />
      <LatestProjects />
      <IndustryExpertise />
      {/* <WorkWithUs /> */}
      <AboutCompany />
      <div className="relative z-[30] w-full" style={{ isolation: "isolate" }}>
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}

