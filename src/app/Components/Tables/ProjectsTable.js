import React from 'react';

const ProjectsTable = ({ projects, onOpenProject }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full bg-base-100/50 backdrop-blur-md rounded-xl overflow-hidden">
        {/* head */}
        <thead className="bg-base-300/50">
          <tr className="text-secondary uppercase tracking-widest text-xs">
            <th className="py-4">Project Title</th>
            <th>Summary</th>
            <th>Technologies</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="hover:bg-primary/5 transition-colors group">
              {/* Title Column */}
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-lg w-10">
                      <span className="text-xs">{project.title.substring(0, 2)}</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </div>
                    <div className="text-xs opacity-50 font-mono">{project.link}</div>
                  </div>
                </div>
              </td>

              {/* Short Description Column */}
              <td className="max-w-xs">
                <span className="text-sm opacity-80 leading-tight">
                  {project.shortDescription}
                </span>
              </td>

              {/* Tags Column */}
              <td>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="badge badge-ghost badge-sm border-white/10 text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;