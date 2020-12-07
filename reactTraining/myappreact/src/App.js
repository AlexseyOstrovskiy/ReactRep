import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Whether from "./components/whether";



const API_KEY = "090f0845283224269feedaef0c7de066";

class App extends React.Component{

    state={
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error :  undefined,
        sunset: undefined,
        error: undefined,
        test1: undefined
    }

gettingWeather = async (e) => {
e.preventDefault();
    const city = e.target.elements.city.value;


 test1 = new test();
const test2 = test1.getI;

    if(city ){
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();

//время заката и восхода выводятся не правильно

        const sunset = data.sys.sunset;
        const date = new Date();
        date.setTime(sunset);
        const sunset_data = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

        const sunrise = data.sys.sunrise;
        const date2 = new Date();
        date2.setTime(sunrise);
        const sunrise_data = date2.getHours()+":"+date2.getMinutes()+":"+date2.getSeconds();


        this.setState({
            temp :data.main.temp,
            city: data.name,
            country: data.sys.country,
            // sunrise: data.sys.sunrise,
            // sunset: data.sys.sunset,
            sunrise: sunrise_data,
            sunset: sunset_data,
            error : "",
            test1 : test2
        });
    }


}
    render(){
        return(
        <div>
        <Info/>
        <Form weatherMethod={this.gettingWeather}/>
        <Whether
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        sunrise={this.state.sunrise}
        sunset={this.state.sunset}
        error={this.state.error}
        test ={this.imba}
        />
        </div>
        );
    }
}

export default App;
