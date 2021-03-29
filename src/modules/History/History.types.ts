export type IStoreBrowserHistory = string;

export interface IBrowserHistoryActionCreators {
  emitReplaceHistoryRoute: (route: string) => void;
  reset: () => void;
}

export interface IBrowserHistoryActions {
  Types: any;
  Creators: IBrowserHistoryActionCreators;
}
