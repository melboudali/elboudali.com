import { getAllReposStars } from "./projects";
import { selectedProjectType, repoType, cardRepoType, fullCardRepoType, coverType } from "../types/projects";

describe("testing ", () => {
  it("count repo stars", () => {
    const repos: repoType[] = [
      { id: "", name: "", description: "", stargazers_count: 4, html_url: "", homepage: "", created_at: "", pushed_at: "" },
      { id: "", name: "", description: "", stargazers_count: 10, html_url: "", homepage: "", created_at: "", pushed_at: "" },
      { id: "", name: "", description: "", stargazers_count: 200, html_url: "", homepage: "", created_at: "", pushed_at: "" },
      { id: "", name: "", description: "", stargazers_count: 2, html_url: "", homepage: "", created_at: "", pushed_at: "" },
      { id: "", name: "", description: "", stargazers_count: 19, html_url: "", homepage: "", created_at: "", pushed_at: "" },
    ];
    expect(getAllReposStars(repos)).toBe(235);
  });
});
