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
      <Seo title="Jeremy Johnson Portfolio Site" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <InterestsSection sectionId="details" heading="Skills" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={["Blog"]} />
        <ContactSection sectionId="github" heading="Want to chat?" />
      </Page>
    </>
  );
}
