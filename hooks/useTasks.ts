// import { useSyncExternalStore } from "react";
// import { useTaskStore } from "../Store/taskStore";

// // Custom hook for using tasks with server snapshot caching
// export const useTasks = () => {
//   const store = useTaskStore;

//   // Subscribe to state changes
//   const subscribe = store.subscribe;

//   // Get the current state snapshot
//   const getSnapshot = () => store.getState().tasks;

//   // Server-side snapshot caching
//   const serverSnapshot = getSnapshot();
//   const getServerSnapshot = () => serverSnapshot;

//   // Use useSyncExternalStore to ensure stable snapshot
//   return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
// };