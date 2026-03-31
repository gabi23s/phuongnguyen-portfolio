import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Selected work</h2>
        <p className="text-muted mb-12 max-w-xl">
          Case studies from 10 years of building products in HealthTech,
          Commerce, and B2B.
        </p>

        <div className="grid md:grid-cols-2 gap-8 stagger">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
