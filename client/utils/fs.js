/**
 *  Get the file extension
 */
function getExt(path) {
    if (path) {
        let pos = path.lastIndexOf('.')
        return pos > 0 ? path.substr(pos) : ''
    } else {
        return ''
    }
}

export default {
    getExt
}