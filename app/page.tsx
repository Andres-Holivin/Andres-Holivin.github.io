import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import SkillsPage from './components/SkillsPage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import ContactPage from './components/ContactPage';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Navigation />
      <HomePage />
      <SkillsPage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </Box>
  );
}
