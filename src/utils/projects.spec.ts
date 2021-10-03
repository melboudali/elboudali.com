import { getAllReposStars, sortProjects, filterProjects, getSelectedProject, getDate } from "./projects";
import { selectedProjectType, repoType, cardRepoType, fullCardRepoType, coverType } from "../types/projects";

const repos: repoType[] = [
  {
    id: "1",
    name: "repo1",
    description: "repo1",
    stargazers_count: 4,
    html_url: "",
    homepage: "",
    created_at: "2021-07-18T13:21:01Z",
    pushed_at: "",
  },
  {
    id: "2",
    name: "repo2",
    description: "repo2",
    stargazers_count: 10,
    html_url: "",
    homepage: "",
    created_at: "2021-08-18T13:21:01Z",
    pushed_at: "",
  },
  {
    id: "3",
    name: "repo3",
    description: "repo3",
    stargazers_count: 200,
    html_url: "",
    homepage: "",
    created_at: "2021-06-18T13:21:01Z",
    pushed_at: "",
  },
  {
    id: "4",
    name: "repo4",
    description: "repo4",
    stargazers_count: 2,
    html_url: "",
    homepage: "",
    created_at: "2021-05-18T13:21:01Z",
    pushed_at: "",
  },
  {
    id: "5",
    name: "repo5",
    description: "repo5",
    stargazers_count: 19,
    html_url: "",
    homepage: "",
    created_at: "2021-04-18T13:21:01Z",
    pushed_at: "",
  },
];

describe("testing getAllReposStars, filterProjects, getSelectedProject, and getDate functions", () => {
  const selectedProjects: selectedProjectType[] = [
    {
      project_name: "repo2",
      project_title: "repo2 title",
      project_cover: "repo2 cover",
      project_topics: ["HTML", "React"],
    },
    {
      project_name: "repo4",
      project_title: "repo4 title",
      project_cover: "repo4 cover",
      project_topics: ["HTML", "React"],
    },
  ];
  it("count repo stars", () => {
    expect(getAllReposStars(repos)).toBe(235);
  });
  it("return selected projects", () => {
    expect(filterProjects(repos, selectedProjects)).toEqual([repos[1], repos[3]]);
    expect(filterProjects(repos, selectedProjects)[0].name).toBe("repo2");
    expect(filterProjects(repos, selectedProjects)[1].name).toBe("repo4");
  });
  it("return selected project", () => {
    expect(getSelectedProject(repos[1], selectedProjects)).toEqual({ ...repos[1], ...selectedProjects[0] });
    expect(getSelectedProject(repos[1], selectedProjects).name).toBe("repo2");
    expect(getSelectedProject(repos[1], selectedProjects).stargazers_count).toBe(10);
    expect(getSelectedProject(repos[1], selectedProjects).created_at).toBe("2021-08-18T13:21:01Z");
  });
  it("return month and year", () => {
    expect(getDate("2021-04-18T13:21:01Z")).toBe("Apr 2021");
    expect(getDate("2021-06-18T13:21:01Z")).toBe("Jun 2021");
  });
});

describe("testing sortProjects function", () => {
  it("sort projects by stars", () => {
    expect(sortProjects(repos, "stargazers_count")[0].stargazers_count).toBe(200);
  });
  it("sort projects by created date", () => {
    expect(sortProjects(repos, "created_at")[0].created_at).toBe("2021-08-18T13:21:01Z");
  });
});
