import { Cursor } from './components/Cursor'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Toggle } from './components/Toggle'

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main className="max-w-[1100px] mx-auto w-full">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Toggle />
    </>
  )
}
