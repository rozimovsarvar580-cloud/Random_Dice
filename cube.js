const cube = document.querySelector('.cube')
let deg = [
    '90',
    '180',
    '270',
    '360',
     '180',
    '90',
    '360',
    '270',
    '90',
     '180',
    '270',
    '360',
     '90',
    '180',
    '270',
    '360',
]
let XY = [
    'X',
    'Y',
]

window.addEventListener('keydown',(e) =>{
if(e.key === 'ArrowRight'){
  cube.style.transform += 'rotateY(-90deg)'
}
if(e.key === 'ArrowLeft'){
    cube.style.transform += 'rotateY(90deg)'
}
if(e.key === 'ArrowUp'){
    cube.style.transform += 'rotateX(-90deg)'
}
if(e.key === 'ArrowDown'){
    cube.style.transform += 'rotateX(90deg)'
}
})
console.log(Math.trunc(Math.random() * 4))
window.addEventListener('click', () =>{
console.log(`rotate${XY[Math.trunc(Math.random()*2)]}(${deg[Math.trunc(Math.random()*16)]}deg)`)
})
