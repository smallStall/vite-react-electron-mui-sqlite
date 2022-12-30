/**
 * @module preload
 */
const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('myapi', {
  nyan: async (data: string) => await ipcRenderer.invoke('nyan', data),
  test: () => ipcRenderer.invoke('testtest'),
});

export {};
