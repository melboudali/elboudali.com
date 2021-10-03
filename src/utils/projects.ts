import { selectedProjectType, repoType, cardRepoType, fullCardRepoType, coverType } from "../types/projects";

export const getProjectsNames = (selectedProjects: selectedProjectType[]): string[] => selectedProjects.map(project => project.project_name);

export const getAllReposStars = (repos: repoType[]): number => {
  let sum = 0;
  repos.map(repo => (sum += repo.stargazers_count!));
  return sum;
};

export const sortProjects = (repos: repoType[], sortBy: string): repoType[] => {
  if (sortBy === "stargazers_count") {
    return repos.sort((a, b) => b.stargazers_count! - a.stargazers_count!);
  }
  return repos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
};

export const filterProjects = (repos: repoType[], selectedProjects: selectedProjectType[]): repoType[] => {
  return repos.filter(repo => getProjectsNames(selectedProjects).includes(repo.name!));
};

export const getSelectedProject = (repo: cardRepoType, selectedProjects: selectedProjectType[]): fullCardRepoType => {
  let data: fullCardRepoType;
  selectedProjects.map(project => {
    if (project.project_name === repo.name) {
      data = { ...repo, ...project };
    }
  });
  return data!;
};

export const getProjectCover = (project_cover: string, covers: coverType[]): coverType => {
  let selectedCover: coverType;
  covers.map(cover => {
    if (cover.relativePath === project_cover) {
      selectedCover = cover;
    }
  });
  return selectedCover!;
};

export const getDate = (date: string): string => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`;
};
