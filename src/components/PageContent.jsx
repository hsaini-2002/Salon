"use client";

import { useApp } from "@/contexts/AppContext";
import { getComponentKey } from "@/lib/components/registry";
import dynamic from "next/dynamic";
import React from 'react';
import HarshSainiHeader from './sections/HarshSainiHeader';
import HarshSainiHero from './sections/HarshSainiHero';
import HarshSainiServices from './sections/HarshSainiServices';
import HarshSainiServicesPage from './sections/HarshSainiServicesPage';
import HarshSainiFooter from './sections/HarshSainiFooter';
import HarshSainiGallery from './sections/HarshSainiGallery';
import HarshSainiTestimonials from './sections/HarshSainiTestimonials';
import HarshSainiAppointment from './sections/HarshSainiAppointment';
import HarshSainiAbout from './sections/HarshSainiAbout';
import HarshSainiTeam from './sections/HarshSainiTeam';
import HarshSainiContact from './sections/HarshSainiContact';

// Dynamic component map for section types and variants - moved to client component
const SECTION_MAP = {
  header_1: dynamic(() => import("@/components/sections/Header1")),
  header_2: dynamic(() => import("@/components/sections/Header2")),
  header_3: dynamic(() => import("@/components/sections/Header3")),
  hero_1: dynamic(() => import("@/components/sections/Hero1")),
  hero_2: dynamic(() => import("@/components/sections/Hero2")),
  about_1: dynamic(() => import("@/components/sections/About1")),
  services_1: dynamic(() => import("@/components/sections/Services1")),
  testimonial_1: dynamic(() => import("@/components/sections/Testimonial1")),
  faq_1: dynamic(() => import("@/components/sections/FAQ1")),
  contact_1: dynamic(() => import("@/components/sections/Contact1")),
  footer_1: dynamic(() => import("@/components/sections/Footer1")),
  footer_2: dynamic(() => import("@/components/sections/Footer2")),
  gallery_1: dynamic(() => import("@/components/sections/Gallery1")),
  gallery_2: dynamic(() => import("@/components/sections/Gallery2")),
  features_1: dynamic(() => import("@/components/sections/Features1")),
  features_2: dynamic(() => import("@/components/sections/Features2")),
  pricing_1: dynamic(() => import("@/components/sections/Pricing1")),
  pricing_2: dynamic(() => import("@/components/sections/Pricing2")),
  cta_1: dynamic(() => import("@/components/sections/CTA1")),
  cta_2: dynamic(() => import("@/components/sections/CTA2")),
  team_1: dynamic(() => import("@/components/sections/Team1")),
  team_2: dynamic(() => import("@/components/sections/Team2")),
  HarshSainiHeader_1: dynamic(() => import("@/components/sections/HarshSainiHeader")),
  HarshSainiHero_1: dynamic(() => import("@/components/sections/HarshSainiHero")),
  HarshSainiServices_1: dynamic(() => import("@/components/sections/HarshSainiServices")),
  HarshSainiGallery_1: dynamic(() => import("@/components/sections/HarshSainiGallery")),
  HarshSainiTestimonials_1: dynamic(() => import("@/components/sections/HarshSainiTestimonials")),
  HarshSainiAppointment_1: dynamic(() => import("@/components/sections/HarshSainiAppointment")),
  HarshSainiBlog_1: dynamic(() => import("@/components/sections/HarshSainiBlog")),
  HarshSainiFooter_1: dynamic(() => import("@/components/sections/HarshSainiFooter")),
};

export default function PageContent({ page, sections, theme, config }) {
  // Use the app context to get theme values
  const { theme: contextTheme } = useApp();

  // Merge provided theme with context theme, with context taking precedence
  const themeToUse = { ...theme, ...(contextTheme || {}) };

  // Filter sections to only include those starting with HarshSaini
  const harshSainiSections = sections.filter(section => section.type.startsWith('HarshSaini'));

  const renderSection = (section) => {
    const { type, content, items } = section;

    switch (type) {
      case 'HarshSainiHeader':
        return <HarshSainiHeader key={section.id} content={content} items={items} />;
      case 'HarshSainiHero':
        return <HarshSainiHero key={section.id} content={content} items={items} />;
      case 'HarshSainiServices':
        return <HarshSainiServices key={section.id} content={content} items={items} />;
      case 'HarshSainiServicesPage':
        return <HarshSainiServicesPage key={section.id} content={content} items={items} />;
      case 'HarshSainiGallery':
        return <HarshSainiGallery key={section.id} content={content} items={items} />;
      case 'HarshSainiTestimonials':
        return <HarshSainiTestimonials key={section.id} content={content} items={items} />;
      case 'HarshSainiAppointment':
        return <HarshSainiAppointment key={section.id} content={content} items={items} />;
      case 'HarshSainiFooter':
        return <HarshSainiFooter key={section.id} content={content} items={items} />;
      case 'HarshSainiAbout':
        return <HarshSainiAbout key={section.id} content={content} items={items} />;
      case 'HarshSainiTeam':
        return <HarshSainiTeam key={section.id} content={content} items={items} />;
      case 'HarshSainiContact':
        return <HarshSainiContact key={section.id} content={content} items={items} />;
      default:
        return null;
    }
  };

  return (
    <main>
      <h1 className="sr-only">{page.title}</h1>
      {harshSainiSections.map((section) => renderSection(section))}
    </main>
  );
}
