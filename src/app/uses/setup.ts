type Setup = Array<{
  setupName: string;
  items: Array<string>;
}>;

export const setups = [
  {
    setupName: "Computer / Office",
    items: [
      "Asus TUF Gaming F15 FX506LHB",
      '27" Samsung CR50',
      "Garuda Falcon1",
      "Dark Alien K710 Keyboard",
    ],
  },
  {
    setupName: "Coding",
    items: ["Editor: VSCode", "Theme: Github Dark Colorblind (Beta)"],
  },
] satisfies Setup;
