export interface IRoute {
  name: string;
  path: string;
  children: JSX.Element;
  exact: boolean;
  key: string;
  isPrivate: boolean;
  displayHeaderAndFooter: boolean;
}
