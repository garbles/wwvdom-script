const h = require(`virtual-dom/h`)
const diff = require(`virtual-dom/diff`)
const {CREATE, DIFF} = require(`wwvdom-constants`)
let previousNode = null

module.exports = {
  onmessage (ev) {
    const {type, params: {tag, props, children}} = ev.data
    const newNode = h(tag, props, children)

    switch (type) {
      case CREATE:
        previousNode = newNode
      break
      case DIFF:
        const patches = diff(previousNode, newNode)
      previousNode = newNode
      postMessage(patches)
      break
    }
  }
}
