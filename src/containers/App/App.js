import React, { Component } from 'react';

import { MoonLoader } from 'react-spinners';

import classes from './App.module.css';
import assetMapping from '../../assets/assetMapping.json';
import Card from '../../elements/Card/Card';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import Preview from '../../components/Preview/Preview';
import ErrorNotice from '../../components/ErrorNotice/ErrorNotice';


class App extends Component {

  state = {
    // latitude: null,
    // longitude: null,
    searchBarInput: '',
    weatherDetails: {
      temperature: null,
      description: ''
    },
    loading: false,
    error: false
  }



  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude }),
    );
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




  render() {

    // Conditionally render card content
    let cardContent = <Preview />;
    if (this.state.loading) {
      cardContent = <MoonLoader />;
    } else if (this.state.error) {
      cardContent = <ErrorNotice onClickHandler={this.tryAgainHandler} />;
    } else if (this.state.weatherDetails.temperature && this.state.weatherDetails.description !== '') {
      // Display weather information if temperature and description exists
      cardContent = <WeatherDetails data={this.state.weatherDetails} />;
    }

    return (
      <div className={classes.AppWrapper}>
        <Header
          color={assetMapping.colors[
            // Set header color based on weather condition; if error, set color to red
            (this.state.error) ? "error" : this.state.weatherDetails.description
          ]}
          onClickHandler={this.tryAgainHandler} />
        <Footer
          color={assetMapping.colors[
            // Set header color based on weather condition; if error, set color to red
            (this.state.error) ? "error" : this.state.weatherDetails.description
          ]}
          onClickHandler={this.tryAgainHandler} />
        <main className={classes.AppMain}>


          <SearchBar
            value={this.state.searchBarInput}
            onChangeHandler={this.searchBarHandler}
            onClickHandler={this.setWeatherBasedOnCity}
            error={this.state.error} />
          <button class="button-7" onClick={this.setWeatherBasedOnCoordinates}>
            <strong>Get weather based on location</strong>
          </button>

          <Card>
            {cardContent}
          </Card>

        </main>


      </div>
    );
  }
}

export default App;
