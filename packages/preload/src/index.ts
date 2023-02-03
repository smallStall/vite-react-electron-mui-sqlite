/**
 * @module preload
 */
const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('sqliteApi', {
  nyan: async (data: string) => await ipcRenderer.invoke('nyan', data),
  getProjects: async () => await ipcRenderer.invoke('getProjects'),
  getLots: async (projectId: string) => await ipcRenderer.invoke('getLots', projectId),
  getOperations: async (lotId: string) => await ipcRenderer.invoke('getOperations', lotId),
});

export {};
