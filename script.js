class AnimatedNavbar {
    constructor (navId,buttonId){
        this.navbar = document.getElementById(navId);
        this.button = document.getElementById(buttonId);
        this.status = 'closed';
        this.init();
    }
    init () {
        this.button.addEventListener('click', () => {this.action();});
    }
    action (){
        if (this.status == 'closed') {
            this.open();
            this.changeButtonToClose();
        }else{
            this.close();
            this.changeButtonToOpen();
        }
    }
    open () {
        this.navbar.style.width = '20%';
        this.status = 'open';
    }
    close () {
        this.navbar.style.width = '0%';
        this.status = 'closed';
    }
    changeButtonToOpen () {
        this.button.innerHTML = '<i class="fas fa-bars"></i>';
    }
    changeButtonToClose () {
        this.button.innerHTML = '<i class="fas fa-times"></i>';
    }

}

let nav = new AnimatedNavbar('myNav','openNav');

window.onscroll = function(){
    scrollfunction();
}
function scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        document.getElementById('logo').style.color = 'red'; 
        document.getElementById('logo').style.fontSize = '0px';
    }
    else{
        document.getElementById('logo').style.color = 'white';
        document.getElementById('logo').style.fontSize = '40px'
    }
}
