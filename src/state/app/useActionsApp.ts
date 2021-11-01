import { useMemo } from "react";
import { slice } from "state/app/appReducer";
import { bindActionCreators } from "redux";
import { useStateDispatch } from "state/typedHooks";

export const useActionsApp = () => {
  const { actions } = slice;
  const dispatch = useStateDispatch();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch]
  );
};
