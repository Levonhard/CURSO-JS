const gameFrame = document.querySelector('[wm-flappy]')

function randomHeight () {
    return Math.floor(Math.random() * 290) + 10 // altura entre 10 e 300
}

function pipeConstructor() {
    const pipeContainer = document.createElement('div')
    pipeContainer.setAttribute('wm-pipe', 'container')
    gameFrame.appendChild(pipeContainer)
    
    const pipeObject = document.createElement('div')
    pipeObject.setAttribute('wm-pipe', 'object')
    pipeContainer.appendChild(pipeObject)
    
    const pipeBody = document.createElement('div')
    pipeBody.setAttribute('wm-pipe', 'body')
    pipeObject.appendChild(pipeBody)
    
    const pipeEdge = document.createElement('div')
    pipeEdge.setAttribute('wm-pipe', 'edge')
    pipeObject.appendChild(pipeEdge)
    
    const pipeHeight = randomHeight()
    
    pipeObject.setAttribute('wm-pipe-orientation', 'down')
    pipeObject.style.height = `${pipeHeight}px`
    
    const pipeObject2 = pipeObject.cloneNode(true)
    pipeObject2.setAttribute('wm-pipe-orientation', 'up')
    pipeObject2.style.height = `${400 - pipeHeight}px`
    pipeContainer.appendChild(pipeObject2)

    return (pipeContainer)
}

function move(slider) {
    let id = null
    let pos = (0 - slider.offsetWidth)
    clearInterval(id)
    id = setInterval(frame, 8)
    function frame() {
        if (pos == 800) {
            clearInterval(id)
            slider.style.display = 'none'
        } else {
            pos++
            slider.style.right = `${pos}px`
        }
    }

    //return new Promise(function(resolve) {
    //    setInterval(() => resolve(), (800 * 8))
    //})
}

setInterval(() => move(pipeConstructor()), 4000)