import { useSelector } from "react-redux";
import { IStore, SelectorEqualityFn } from "src/store/types";
import { pickKeys } from "src/utils/object";

export function useTypedSelector<K extends keyof IStore>(
  props: Array<K>,
  equalityFn: SelectorEqualityFn<K> = undefined
) {
  return useSelector<IStore, Pick<IStore, K>>(pickKeys(props), equalityFn);
}
