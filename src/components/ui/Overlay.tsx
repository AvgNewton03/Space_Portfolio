"use client";

import { LoadingOverlay } from './LoadingOverlay';
import { LandingOverlay } from './LandingOverlay';
import { Navbar } from './Navbar';
import { ProjectPanel } from './ProjectPanel';
import { AboutPanel } from './AboutPanel';
import { ContactPanel } from './ContactPanel';

export function Overlay() {
  return (
    <>
      <LoadingOverlay />
      <Navbar />
      <LandingOverlay />
      <ProjectPanel />
      <AboutPanel />
      <ContactPanel />
    </>
  );
}
