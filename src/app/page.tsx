import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ConceptSection from './components/ConceptSection'
import ProductsSection from './components/ProductsSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import NewsSection from './components/NewsSection'
import CompanySection from './components/CompanySection'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ConceptSection />
        <ProductsSection />
        <CaseStudiesSection />
        <NewsSection />
        <CompanySection />
      </main>
      <Footer />
    </div>
  )
}
