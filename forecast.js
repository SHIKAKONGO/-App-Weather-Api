class Forecast {
    constructor() {
        this.key = 'qQPvOcyarXuk7Q7z32SMIHuBGOAG4yda';
        this.weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityUrl  = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city) {
        const cityDes = await this.getCity(city);
    const weatherCity = await this.getWeather(cityDes.Key);

        return {cityDes, weatherCity};
    }
    
    async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityUrl + query);
    const data = await response.json();
    return(data[0]);
    }

    async getWeather(id) {
    const que = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherUrl + que);
    const dat = await response.json();
    return dat[0];    
    }
}




/*const key = 'qQPvOcyarXuk7Q7z32SMIHuBGOAG4yda';
//gey weather info
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const que = `${id}?apikey=${key}`;

    const response = await fetch(base + que);
    const dat = await response.json();
    return dat[0];
}

//get city info 

const getCity = async (city) => {
    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(url + query);
    const data = await response.json();
    return(data[0]);
};*/
