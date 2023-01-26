/**
 * @module preload
 */
const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('myapi', {
  nyan: async (data: string) => await ipcRenderer.invoke('nyan', data),
  getProjects: async () => await ipcRenderer.invoke('getProjects'),
  getLots: async (projectId?: number) => await ipcRenderer.invoke('getLots'),
});

export {};
