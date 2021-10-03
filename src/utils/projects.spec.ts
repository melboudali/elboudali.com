import { getAllReposStars, sortProjects } from "./projects";
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

describe("testing ", () => {
  it("count repo stars", () => {
    expect(getAllReposStars(repos)).toBe(235);
  });
});

describe("testing sortProjects", () => {
  it("sort projects by stars", () => {
    expect(sortProjects(repos, "stargazers_count")[0].stargazers_count).toBe(200);
  });
  it("sort projects by created date", () => {
    expect(sortProjects(repos, "created_at")[0].created_at).toBe("2021-08-18T13:21:01Z");
  });
});
