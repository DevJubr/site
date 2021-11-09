let togolIcon = document.querySelector('.togoldiv i');
let linkDiv = document.querySelector('.linkDiv');
let linkDivUL = document.querySelectorAll('.scroll-link');
let hedar = document.querySelector('header');
console.log(linkDivUL);
togolIcon.addEventListener('click', function(){
    linkDiv.classList.toggle('showUl');
});

window.addEventListener('scroll', function(){
    let scrollHeight = window.pageYOffset;
    let hederHeight = hedar.getBoundingClientRect().height;

    if(scrollHeight> hederHeight){
        hedar.classList.add('fixedP');
    }
    else{
        hedar.classList.remove('fixedP');
    }

    let botomToTop = document.querySelector('.botomToTop button');
    if(scrollHeight > 570){
        botomToTop.classList.add('SbotomToTop');
    }
    else{
        botomToTop.classList.remove('SbotomToTop');
    }
});




linkDivUL.forEach(function(e){
    e.addEventListener('click', function(){
    linkDiv.classList.remove('showUl');
    })
})

linkDivUL.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();

        let id = e.currentTarget.getAttribute('href').slice(1);
        let eliment = document.getElementById(id);
        

        let navHight = hedar.getBoundingClientRect().height;
        let fixdiv = hedar.classList.contains('fixedP')
        let position = eliment.offsetTop - navHight;

        if(!fixdiv){
            position = position - navHight;
            // console.log(position);
        }
        window.scrollTo({
            left: 0,
            top: position,
          });
    });
});