//Hero

const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const track = document.getElementById('track');
const slickList = document.getElementById('slick-list')
const slick = document.querySelectorAll('.slick')

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2){
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if (leftPosition > 0 && value == 1) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

// Skills 

document.querySelector('#boton').addEventListener('click', Datos);

function Datos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'skills.json', true)
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (let item of datos) {
                res.innerHTML += `
                <tr>
                    <td>${item.title}</td>
                    <td>${item.level}</td>
                </tr>
                `
            }

        }
    }

}

// Contact Me

const Submit = document.getElementById('submit');
const Name = document.getElementById('name');
const Email = document.getElementById('email');
const Phone = document.getElementById('phone');
const Affair = document.getElementById('affair');
const Message = document.getElementById('message');

function sConsole(){
    event.preventDefault();
    var data = Name;
    console.log(data.value)
    var data = Email;
    console.log(data.value)
    var data = Phone;
    console.log(data.value)
    var data = Affair;
    console.log(data.value)
    var data = Message;
    console.log(data.value)
}

Submit.onclick = function(){
    sConsole();
    alert('Su mensaje ha sido enviado')
}