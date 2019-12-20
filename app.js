const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const forecast = new Forecast();


const updateUi = (data)=> {
    
    const {cityDes , weatherCity} = data;
    
    details.innerHTML = `
    <h5 class="my-3">${cityDes.EnglishName}</h5>
    <div class="my-3">${weatherCity.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weatherCity.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    `;

    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

    //update icon
    const iconSrc = `img/icons/${weatherCity.WeatherIcon}.svg`;
    icon.setAttribute('src' , iconSrc);

    //update img 
    let timeSrc =  null;
    if(weatherCity.IsDayTime) {
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg'; 
    }

    time.setAttribute('src' , timeSrc);
}

cityForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    forecast.updateCity(city)
    .then(data => {
        updateUi(data);
    }).catch(error => {
        console.log(error);
    });

    localStorage.setItem('city' , city);
})

if(localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
    .then(data => {
        updateUi(data)
    }).catch(error => {
        console.log(error)
    })
}