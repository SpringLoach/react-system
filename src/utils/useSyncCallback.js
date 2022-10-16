import { useEffect, useState, useCallback } from "react";

const useSyncCallback = (callback) => {
  const [proxyState, setProxyState] = useState({ current: false });
  const [params, setParams] = useState([]);

  const Func = useCallback(
    (...args) => {
      setParams(args);
      setProxyState({ current: true });
    },
    [proxyState]
  );

  useEffect(() => {
    if (proxyState.current === true) setProxyState({ current: false });
  }, [proxyState]);

  useEffect(() => {
    proxyState.current && callback(...params);
  });

  return Func;
};

export default useSyncCallback;
