import React, { Suspense, lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import Fallback from './tools/Fallback';

// Lazy load your blog pages
const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const Blog1 = lazy(() => import('./pages/blogs/Blog1'));
const Blog2 = lazy(() => import('./pages/blogs/Blog2'));
const Blog3 = lazy(() => import('./pages/blogs/Blog3'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WhyChooseUsPage = lazy(() => import('./pages/WhyChooseUsPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

// ─── Assets and Layout Settings ─────────────────────────────────────────
const consistentLayout = {
  section: 'responsivePad bg-c1-0 text-c4-0 font-dm-sans space-y-8 max-md:space-y-2 2xl:py-[72px] lg:py-[48px] md:py-[40px] py-[32px]',
  sectionClass: 'h6 font-semibold',
  sectionSubheadingClass: 'h4 font-semibold',
};

const hoverBg = 'hover:bg-orange-500';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainLayout consistentLayout={consistentLayout} hoverBg={hoverBg} />}
    >
      <Route
        index
        element={<HomePage consistentLayout={consistentLayout} hoverBg={hoverBg} />}
      />

      {/* Suspense boundary for route-level code splitting */}
      <Route
        path="services"
        element={
          <Suspense fallback={<Fallback />}>
            <ServicesPage />
          </Suspense>
        }
      />

      <Route
        path="whychooseus"
        element={
          <Suspense fallback={<Fallback />}>
            <WhyChooseUsPage />
          </Suspense>
        }
      />

      <Route
        path="portfolio"
        element={
          <Suspense fallback={<Fallback />}>
            <PortfolioPage />
          </Suspense>
        }
      />

      <Route
        path="contact"
        element={
          <Suspense fallback={<Fallback />}>
            <ContactPage />
          </Suspense>
        }
      />

      <Route
        path="pricing"
        element={
          <Suspense fallback={<Fallback />}>
            <PricingPage />
          </Suspense>
        }
      />

      <Route
        path="blogs"
        element={
          <Suspense fallback={<Fallback />}>
            <BlogsPage consistentLayout={consistentLayout} />
          </Suspense>
        }
      />
      <Route
        path="blogs/1"
        element={
          <Suspense fallback={<Fallback />}>
            <Blog1 consistentLayout={consistentLayout} />
          </Suspense>
        }
      />
      <Route
        path="blogs/2"
        element={
          <Suspense fallback={<Fallback />}>
            <Blog2 consistentLayout={consistentLayout} />
          </Suspense>
        }
      />
      <Route
        path="blogs/3"
        element={
          <Suspense fallback={<Fallback />}>
            <Blog3 consistentLayout={consistentLayout} />
          </Suspense>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
