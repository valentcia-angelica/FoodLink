document.addEventListener("DOMContentLoaded", function(){
    const currPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('#navbar ul li a');

    navLinks.forEach(link =>{
        if(link.getAttribute('href') === currPage){
            link.classList.add('active');
        }

        link.addEventListener('click', function(){
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

