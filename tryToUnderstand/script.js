
const listElement = document.querySelector('#icon');
const list = document.querySelector('.list_end');

const elementsLink = document.querySelectorAll('.list_end .list_end-item a')
const elementsItem = document.querySelectorAll('.list_end .list_end-item')

window.addEventListener('resize', function(e){
  if(window.innerWidth >= 996.66){
    list.classList.remove('open')
    listElement.className = 'fa fa-bars'
  }
})
listElement.addEventListener('click', function(e){
    list.style.zIndex = '1'
    list.classList.toggle('open')
    if(list.classList.contains('open')){
      listElement.className = 'fa fa-times';
    }
    else{
      listElement.className = 'fa fa-bars';
    }
      elementsItem.forEach(cur => {
        cur.style.listStyleType = 'none'
        cur.style.height = '70px'
        cur.style.borderBottom = '1px solid black'

        cur.addEventListener('mouseover', function(e){
          cur.style.background = 'aliceblue'
        })
        cur.addEventListener('mouseout', function(e){
          cur.style.background = '#fff'
        })
      })
      elementsLink.forEach(cur => {
        cur.style.textDecoration = 'none'
        cur.style.fontWeight = '700'
        cur.style.textTransform = 'uppercase'
        cur.style.fontFamily = '"Nunito", sans-serif'
        cur.style.color = 'black'
        cur.style.display = 'flex'
        cur.style.alignItems = 'center'
        cur.style.justifyContent = 'end'
        cur.style.padding = '0 30px 0 0'
        cur.style.height = '100%'
        cur.style.fontSize = '1.9rem' 

        cur.addEventListener('click', function(e){
          list.classList.remove('open')
          listElement.className = 'fa fa-bars'
        })
    })
})

