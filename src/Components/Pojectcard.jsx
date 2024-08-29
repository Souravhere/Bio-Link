import React from 'react';

function Pojectcard() {
  const projects = [
    {
      id: 1,
      title: "Vigge Smart",
      acronym: "VG",
      link: "#",
    },
    {
      id: 2,
      title: "Project Apollo",
      acronym: "PA",
      link: "#",
    },
    {
      id: 3,
      title: "Neptune Exploration",
      acronym: "NE",
      link: "#",
    },
    {
      id: 4,
      title: "Project Apollo",
      acronym: "PA",
      link: "#",
    },
    {
      id: 5,
      title: "Neptune Exploration",
      acronym: "NE",
      link: "#",
    },
  ];

  return (
    <div>
      {projects.map((project) => (
        <div
          key={project.id}
          className="mx-auto my-4 max-w-sm p-6 bg-[#ffffff] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href={project.link}>
            <div className="py-1 px-2 bg-purple-500/80 inline-block rounded-full font-semibold">
              {project.acronym}
            </div>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {project.title}
            </h5>
          </a>
          <a
            href={project.link}
            className="inline-flex font-medium items-center text-blue-600 hover:underline"
          >
            See more details
          </a>
        </div>
      ))}
    </div>
  );
}

export default Pojectcard;
