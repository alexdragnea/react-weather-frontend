import React, {Component} from 'react';

import {MoonLoader} from 'react-spinners';

import classes from './App.module.css';
import assetMapping from '../../assets/assetMapping.json';
import Card from '../../elements/Card/Card';
import WeatherStationCard from '../../elements/Weatherstation/WeatherStationCard'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import WeatherStationDetails from "../../components/WeatherStation/WeatherStationDetails";
import Preview from '../../components/Preview/Preview';
import ErrorNotice from '../../components/ErrorNotice/ErrorNotice';



class App extends Component {

  state = {
    searchBarInput: '',
    weatherDetails: {
      temperature: null,
      description: ''
    },
    weatherStationDetails: {
      temperature: null,
      humidity: null
    },
    loading: false,
    error: false
  }


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude}),
    );

    this.getWeatherFromStation();
  };

  setWeatherBasedOnCoordinates = async (location) => {

    // Fetch weather information and update state


    const API_URL = 'http://localhost:8181/api/coordinates?';
    const URL = API_URL + `latitude=${this.state.latitude}&longitude=${this.state.longitude}`;
    this.setState({
      weatherDetails: {},
      loading: true,
      error: false
    }, () => {
      // Executed as callback function
      fetch(URL)
          .then(res => res.json())
          .then(data => {
            // If city exists, update weather details
            if (data.code === 200) {
              this.setState({
                weatherDetails: {
                  temperature: data.temp,
                  feels_like: data.feels_like,
                  temp_min: data.temp_min,
                  temp_max: data.temp_max,
                  city: data.city.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
                  description: data.forecast,
                  humidity: data.humidity,
                  pressure: data.pressure,
                  windspeed: data.windSpeed
                },
                loading: false
              });
            } else {
              // If city doesn't exist, throw error
              throw data.cod
            }
          })
          .catch(err => {
            console.log(err);
            this.setState({
              loading: false,
              error: true
            });
          });
    });


  };


  // Update state with current search bar input
  searchBarHandler = (e) => {
    this.setState({
      searchBarInput: e.target.value
    })
  }


  // Reset state after clicking on Logo or Try Again button
  tryAgainHandler = () => {
    this.setState({
      searchBarInput: '',
      weatherDetails: {},
      error: false
    })
  }


  // Fetch weather information and update state
  setWeatherBasedOnCity = () => {
    const city = this.state.searchBarInput;
    const API_URL = 'http://localhost:8181/api';
    const URL = API_URL + `?city=${city}`;
    this.setState({
      weatherDetails: {},
      loading: true,
      error: false
    }, () => {
      // Executed as callback function
      fetch(URL)
          .then(res => res.json())
          .then(data => {
            // If city exists, update weather details
            if (data.code === 200) {
              this.setState({
                weatherDetails: {
                  temperature: data.temp,
                  feels_like: data.feels_like,
                  temp_min: data.temp_min,
                  temp_max: data.temp_max,
                  city: data.city.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
                  description: data.forecast,
                  humidity: data.humidity,
                  pressure: data.pressure,
                  windspeed: data.windSpeed
                },
                loading: false
              });
            } else {
              // If city doesn't exist, throw error
              throw data.cod
            }
          })
          .catch(err => {
            console.log(err);
            this.setState({
              loading: false,
              error: true
            });
          });
    });
  }

  // Fetch weather information and update state
  getWeatherFromStation = () => {
    const URL = 'http://localhost:8181/thingspeak/data';
    this.setState({
      weatherStationDetails: {},
    }, () => {
      // Executed as callback function
      fetch(URL)
          .then(res => res.json())
          .then(data => {
            // If city exists, update weather details
            if (data.code === 200) {
              this.setState({
                weatherStationDetails: {
                  station_temp: data.temperature,
                  station_humidity: data.humidity,
                  station_pressure: data.pressure,
                  station_date: data.created_at
                },
                loading: false
              });
            } else {
              // If city doesn't exist, throw error
              throw data.cod
            }
          })
          .catch(err => {
            console.log(err);
            this.setState({
              loading: false,
              error: true
            });
          });
    });
  }


  render() {

    // Conditionally render card content
    let cardContent = <Preview/>;
    if (this.state.loading) {
      cardContent = <MoonLoader/>;
    } else if (this.state.error) {
      cardContent = <ErrorNotice onClickHandler={this.tryAgainHandler}/>;
    } else if (this.state.weatherDetails.temperature && this.state.weatherDetails.description !== '') {
      // Display weather information if temperature and description exists
      cardContent = <WeatherDetails data={this.state.weatherDetails}/>;
    }

    // Conditionally render card content
    let weatherStationCardContent = <Preview/>;


    weatherStationCardContent = <WeatherStationDetails data={this.state.weatherStationDetails}/>;


    return (
        <div className={classes.AppWrapper}>
          <Header
              color={assetMapping.colors[
                  // Set header color based on weather condition; if error, set color to red
                  (this.state.error) ? "error" : this.state.weatherDetails.description
                  ]}
              onClickHandler={this.tryAgainHandler}/>
          <Footer
              color={assetMapping.colors[
                  // Set header color based on weather condition; if error, set color to red
                  (this.state.error) ? "error" : this.state.weatherDetails.description
                  ]}
              onClickHandler={this.tryAgainHandler}/>
          <main className={classes.AppMain}>

            <h2>ESP32 Weather Station Live Data</h2>
            <hr className="new6"></hr>
            <WeatherStationCard>
              {weatherStationCardContent}
              <button className="button-7" onClick={this.getWeatherFromStation}>
                <strong>Refresh Live Data</strong>
                <i className="fa fa-refresh"></i>
              </button>
            </WeatherStationCard>

            <h2>Open Weather Map API Weather Details</h2>
            <hr className="new6"></hr>
            <SearchBar
                value={this.state.searchBarInput}
                onChangeHandler={this.searchBarHandler}
                onClickHandler={this.setWeatherBasedOnCity}
                error={this.state.error}/>
            <button className="button-7" onClick={this.setWeatherBasedOnCoordinates}>
              <strong>Get weather based on location</strong>
            </button>

            <Card>
              {cardContent}
            </Card>


            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


          </main>


        </div>
    );
  }
}

export default App;
