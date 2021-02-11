/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navlink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click',linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY<= sectionTop + sectionHeight){
            document.querySelectorAll('.nav__menu a[href*='+ sectionId + ']').forEach.classList.add('active')
        }else
        document.querySelectorAll('.nav__menu a[href*='+ sectionId + ']').forEach.classList.remove('active')
    })
}



/*texting codes*/
$(document).ready(function () {
    let modified = document.lastModified;
    console.log(modified);
    $("#modification").html(`Last Modified: ${modified}`);
})

function sendmail() {
    let subject = $("#subject").val();
    let body = $("#message").val();
    let name = $("#name").val();
  
    console.log(name, body, subject);
  
    body = `${body}<br>Regards<br>` + name;
  
    setTimeout(
      window.open(`mailto:najmulkabir178@gmail.com?subject=${subject}&body=${body}`),
      100000
    );
  }

