document.addEventListener('DOMContentLoaded', function() {

    // Use buttons to toggle between views
    document.querySelector('#bio').addEventListener('click', () => gotobio());
    document.querySelector('#kahoot').addEventListener('click', () => gotokahoot());
    document.querySelector('#imovie').addEventListener('click', () => gotoimovie());
    document.querySelector('#garageband').addEventListener('click', () => gotogarageband());
    document.querySelector('#powerpoint').addEventListener('click', () => gotopowerpoint());
    document.querySelector('#scratch').addEventListener('click', () => gotoscratch());

    gotobio();
});

function blankall() {
    // disable all display divs
    document.querySelector('#aboutmediv').style.display = 'none';
    document.querySelector('#kahootdiv').style.display = 'none';
    document.querySelector('#imoviediv').style.display = 'none';
    document.querySelector('#garagebanddiv').style.display = 'none';
    document.querySelector('#powerpointdiv').style.display = 'none';
    document.querySelector('#scratchdiv').style.display = 'none';
    
    // make all buttons inactive
    document.querySelector('#bio').classList.remove('active');
    document.querySelector('#kahoot').classList.remove('active');
    document.querySelector('#imovie').classList.remove('active');
    document.querySelector('#garageband').classList.remove('active');
    document.querySelector('#powerpoint').classList.remove('active');
    document.querySelector('#scratch').classList.remove('active');

}

function gotobio() {
    blankall();
    document.querySelector('#aboutmediv').style.display = 'block';
    document.querySelector('#bio').classList.add('active');
}

function gotokahoot() {
    blankall();
    document.querySelector('#kahootdiv').style.display = 'block';
    document.querySelector('#kahoot').classList.add('active');
}

function gotoimovie() {
    blankall();
    document.querySelector('#imoviediv').style.display = 'block';
    document.querySelector('#imovie').classList.add('active');
}

function gotogarageband() {
    blankall();
    document.querySelector('#garagebanddiv').style.display = 'block';
    document.querySelector('#garageband').classList.add('active');
}

function gotopowerpoint() {
    blankall();
    document.querySelector('#powerpointdiv').style.display = 'block';
    document.querySelector('#powerpoint').classList.add('active');
}

function gotoscratch() {
    blankall();
    document.querySelector('#scratchdiv').style.display = 'block';
    document.querySelector('#scratch').classList.add('active');
}