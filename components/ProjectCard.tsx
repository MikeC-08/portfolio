import { Project } from "@/constants/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-slate-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all bg-white flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 mt-3 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 bg-slate-50 text-slate-500 text-xs rounded-md border border-slate-100">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <br></br>
      {project.githubRepoOwner && project.githubRepo && (
        <iframe src={`https://ghbtns.com/github-btn.html?user=${project.githubRepoOwner}&repo=${project.githubRepo}&type=watch&count=false`} frameBorder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
      )}
    </div>
  );
}