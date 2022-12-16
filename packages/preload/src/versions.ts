const {ipcRenderer} = require('electron');

export const versions = () => ipcRenderer.send('do-a-thing');
