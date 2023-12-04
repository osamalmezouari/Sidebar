const sidebar = document.querySelector(".sidebar") as HTMLDivElement
const bars = document.querySelector(".bars") as HTMLDivElement
const xMark = document.querySelector(".fa-xmark") as HTMLDivElement
let barsActive: boolean = true

bars.onclick = (): void => {
    if (barsActive) {
        sidebar.style.animationName = "leftShowElement"
        barsActive = false
    }
    else {
        sidebar.style.animationName = "leftHideElement"
        barsActive = true
    }
}

xMark.onclick = (): void => {
    sidebar.style.animationName = "leftHideElement"
    barsActive = !barsActive
}


