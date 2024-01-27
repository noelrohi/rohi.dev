export type Repo = {
  name: string;
  description: string;
  stars: string;
  forks: string;
  repoUrl: string;
  author: string | undefined;
  language: {
    text: string;
    color: string | undefined;
  };
};
