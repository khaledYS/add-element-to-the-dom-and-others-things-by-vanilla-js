
function doAllOfThis(e){
    var el = document.querySelector('.context-menu')
    el && el.remove() 
    const theDropDownElement = document.createElement('div')
    theDropDownElement.className = 'context-menu';
    document.body.append(theDropDownElement);
    theDropDownElement.style.top = `${e.pageY}px`;
    theDropDownElement.style.left = `${e.pageX}px`;
    theDropDownElement.innerHTML = `<li data-tocopy >copy</li><li data-toedit >edit</li><li data-todelet >delet</li>`;
    document.querySelector('.context-menu > li[data-tocopy] ').addEventListener('click',async()=>{
        try{
            var el = document.createElement('input');
            document.body.append(el)
            el.style.width = '10px';
            el.style.height= '10px';
            el.value = e.target.innerText 
            await el.select();
            await el.setSelectionRange(0, 999999);
            await document.execCommand('copy')}
        finally{
            el.remove();
        }
    })
    document.querySelector('.context-menu > li[data-toedit] ').addEventListener('click',async ()=>{
        var edited = await window.prompt('write what you want 🎉')
        e.target.innerText = edited;
    })
    document.querySelector('.context-menu > li[data-todelet] ').addEventListener('click',async ()=>{
        e.target.remove()
    })
}

document.body.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    var el = document.querySelector('.context-menu')
    el && el.remove() 
    const theDropDownElement = document.createElement('div')
    theDropDownElement.className = 'context-menu';
    document.body.append(theDropDownElement);
    theDropDownElement.style.top = `${e.pageY}px`;
    theDropDownElement.style.left = `${e.pageX}px`;
    theDropDownElement.innerHTML = `<li data-toadd >add</li>`;
    document.querySelector('.context-menu > li[data-toadd] ').addEventListener('click',async ()=>{
        var edited = await window.prompt('write what you want 🎉')
        const gig = document.createElement('h1')
        gig.className = 'hello added'
        gig.textContent = edited;
        gig.style.top = e.pageY + 'px';
        gig.style.left= e.pageX + 'px';
        gig.style.position= 'absolute';
        gig.oncontextmenu= e=>{
            e.stopPropagation()
            e.preventDefault();
            doAllOfThis(e);
        }
        document.body.append(gig);
    })
})






document.querySelectorAll('.hello').forEach(element => {
    element.addEventListener('contextmenu',(e)=>{
        e.stopPropagation()
        e.preventDefault();
        doAllOfThis(e)
    })
});

window.addEventListener('contextmenu', e=>{
    e.preventDefault()
})
window.addEventListener('click',()=>{
    var el = document.querySelector('.context-menu')
    el && el.remove()
})