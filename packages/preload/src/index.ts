/**
 * @module preload
 */
const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('myapi', {
  nyan: async (data: string) => await ipcRenderer.invoke('nyan', data),
  test: async () => await ipcRenderer.invoke('testtest'),
});

export {};
