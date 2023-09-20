let text = document.getElementById('player')
let restart = document.getElementById('restart')

let boxes =  Array.from (document.getElementsByClassName('case'))

const otext='O'
const xtext='X'
let currentplayer = xtext
let spaces = Array(9).fill(null)

function start_game (){
    boxes.forEach(box=> box.addEventListener('click',function(e){
        
        const id=e.target.id
        if(!spaces[id]){
            spaces[id]=currentplayer
            e.target.innerText= currentplayer
            if(currentplayer=== xtext){
                currentplayer= otext
            }else {
                currentplayer= xtext
            }
            
        }
    }))

}

restart.addEventListener('click',res)
function res(){
    
    spaces.fill('null')
    
    boxes.forEach(box=> {box.innerText=' '})
    currentplayer=xtext
    
    location.reload()
}

start_game()