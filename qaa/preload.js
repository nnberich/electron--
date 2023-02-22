
const { contextBridge, ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    cnx: () => ipcRenderer.invoke('ping'), //抛出了 ping 这个变量
    // 能暴露的不仅仅是函数，我们还可以暴露变量
})
