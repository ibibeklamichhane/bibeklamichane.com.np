import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Bibek Lamichhane -Fullstack Developer" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        
        <AboutSection sectionId="about" heading="About Me" />
        
        <InterestsSection sectionId="details" heading="Skills" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog']} />
        <ProjectsSection sectionId="features" heading="Projects" />
        {/* <ContactSection sectionId="github" heading="Issues?" /> */}
      </Page>
    </>
  );
}
