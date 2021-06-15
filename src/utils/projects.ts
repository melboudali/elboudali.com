import { selectedProjectType, repoType, cardRepoType, fullCardRepoType } from "../types/projects";

const getProjectsNames = (selectedProjects: selectedProjectType[]) => selectedProjects.map(project => project.project_name);

export const getAllReposStars = (repos: repoType[]) => {
  let sum = 0;
  repos.map(repo => (sum += repo.stargazers_count!));
  return sum;
};

export const sortProjects = (repos: repoType[], sortBy: string) => {
  if (sortBy === "stargazers_count") {
    return repos.sort((a, b) => b.stargazers_count! - a.stargazers_count!);
  }
  return repos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
};

export const filterProjects = (repos: repoType[], selectedProjects: selectedProjectType[]) => {
  return repos.filter(repo => getProjectsNames(selectedProjects).includes(repo.name!));
};

export const getSelectedProject = (repo: cardRepoType, selectedProjects: selectedProjectType[]): fullCardRepoType => {
  let projectPlaceHolder: selectedProjectType = {
    project_name: "",
    project_title: "",
    project_cover: "",
    project_startDate: "",
    project_endDate: "",
    project_topis: [""],
    project_figmaLink: "",
  };
  let data = { ...repo, ...projectPlaceHolder };
  selectedProjects.map(project => {
    if (project.project_name === repo.name) {
      data = { ...repo, ...project };
    }
  });
  return data;
};
