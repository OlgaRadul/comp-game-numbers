const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        play();
    }
})


button.addEventListener("click", play);

//1-Доступ к числу пользователя
//2- пищем условие что нельзя ввести число меньше 1 и больше 20
//также нельзя ввести букву вместо числа

function play(){
     const userNumber = document.querySelector("#guess").value;

     if(userNumber < 1 || userNumber > 20){
        Swal.fire({
            icon: 'error',
            title: 'Oй!',
            text: 'Введите число от 1 до 20!',
            
          })
     }
else if (isNaN(userNumber)){
    Swal.fire({
        icon: 'error',
        title: 'Oй!',
        text: 'Нужно ввести число!',
    })
}
        
//сравниваем ответ пользователя с ответом компютера
else{
    if(userNumber < answer){
        Swal.fire('Попробуй число повыше',
        'Компютер пока побеждает!')
        }

        else if(userNumber > answer){
            Swal.fire('Попробуй число пониже',
            'Компютер пока побеждает!')
        }
            else{
                Swal.fire({
                    title: 'Победа!',
                    imageUrl: 'https://cdn.glitch.global/df92c192-f4ad-4ffe-acc9-28a1bfe11636/success.jpeg?v=1641475015291',
                    imageWidth: 600,
                    imageHeight: 400,
                    imageAlt: 'Победа',
                  })
            }
        }
    
}
















