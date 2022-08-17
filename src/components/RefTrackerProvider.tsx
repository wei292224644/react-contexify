import React, { useContext, createContext } from 'react';
import { RefTracker } from '../hooks';

const Context = createContext({} as RefTrackerProviderProps);

/**
 * Access parent ref tracker.
 */
export function useRefTrackerContext() {
  return useContext(Context);
}

export interface RefTrackerProviderProps {
  refTracker: RefTracker;
  visible: boolean;
  x: number;
  y: number;
}

export const RefTrackerProvider: React.FC<RefTrackerProviderProps> = props => {
  return (
    <Context.Provider value={props}>
      {props.children}
    </Context.Provider>
  );
};
