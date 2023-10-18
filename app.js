const menu = [
  {
    "name": "reaction",
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "name": "memory",
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "name": "verbal",
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "name": "visual",
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
]

const sectionCenter = document.querySelector('.caixa-2-2')

window.addEventListener('DOMContentLoaded', function(){
  displayMenuItem(menu)
})

/**

 * @param {*} menuItems 
 */
function displayMenuItem(menuItems){
    let displayMenu = menuItems.map(function(menu){
       console.log(menu)
        return ` <section class="caixa-2-2">
       

        <div>
          <div class="objetos ${menu.name}">
              <img class="icon" src=${menu.icon}>
            <p class="category">${menu.category}</p>
            <p class="score">${menu.score}/100</p>
          </div>
        </div>
      </section>`
      })
  
      displayMenu = displayMenu.join("")
      
      sectionCenter.innerHTML =  displayMenu
  
  }


  const btn = document.getElementById('btn')

  btn.addEventListener('mousemove', ()=>{
    btn.style.backgroundImage = 'linear-gradient(hsl(252, 80%, 59%), hsl(241, 73%, 52%))'
  })
  btn.addEventListener('mouseout', ()=>{
    btn.style.background = 'hsl(241, 81%, 54%)'
  })