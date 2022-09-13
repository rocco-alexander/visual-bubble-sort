const heights = [40,80,120,160,200,240,280,320,360,400]
const colors = ['black', 'aquamarine', 'brown', 'darksalmon', 'darkgray', 'indigo', 'forestgreen','lightcoral','pink', 'orange']
let sortingContainer = document.querySelector('.sorting-container')
let locations = []



// Instantiate the bars and give them random colors
for(let i =0; i<heights.length;i++){
    let bar = document.createElement("div")
    bar.className = "block"
    bar.style.height = heights[i].toString() + 'px'
    bar.style.background = colors[i]
    locations.push(bar)
}

// Renders the blocks
const render = () =>{
    locations.sort(()=> Math.random() - 0.5) //randomized the positions
    for(let i=0;i<locations.length;i++){
        sortingContainer.appendChild(locations[i])
    }
}



let fps = 20
let i = 0
let iterations = 0 
let sorted = false
function sort(){
    let sorted = false
    let shuffle = document.querySelector(".shuffle")
    shuffle.disabled=true
    let start = document.querySelector(".start")
    start.disabled=true
    setTimeout(function(){
        let location = sortingContainer.children
        // console.log(i)
        if(i == 9){
            i=0
            iterations++
        }

        if(+location[i].style.height.split('p')[0] > +location[i+1].style.height.split('p')[0]){
            originalColor = sortingContainer.children[i].style.background 
            let prev = location[i]
            sortingContainer.removeChild(location[i])
            sortingContainer.insertBefore(prev,sortingContainer.children[i+1])     
            i++
        }
        else{
            sortingContainer.children[i].className = "block"
            i++
        }
        if(iterations === location.length){
            sorted = true
            start.disabled=false
            shuffle.disabled=false
        }
        if(sorted == false){
            requestAnimationFrame(sort)
        }
    }, 0);
}

render()
const start = ()=>{
    iterations = 0
    sorted = false
    sort()
}
// sort()
