import React, { useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getAllWeather, createAllWeather } from '../../redux/apiThunk/ExpertThunk/weatherThunk';
import { useState } from 'react';

const WeatherCard = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather?.weather?.data);
  console.log("Data", weatherData?.weather?.data);
  const user = JSON.parse(localStorage.getItem("user"));
  const [reload, setReload] = useState(true);
  useEffect(() => {
    dispatch(getAllWeather({ location: '', createdDate: '' }));
  }, [dispatch, reload]);
  if ( !weatherData|| !Array.isArray(weatherData)) {
    return <div>Loading...</div>; 
  }
  const  handleCreateNewWeather = async () => {
    await dispatch(createAllWeather({userId: user?.userId}))
    setReload(!reload);
  };
  console.log("user", user.userId);
  const cardStyle = {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: 20,
  };

  const mediaStyle = {
    height: 200,
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleCreateNewWeather}>
        Create New Weather
      </Button>
      {weatherData.map((data) => (
        <Card key={data.weatherId} style={cardStyle}>
          <CardMedia
            style={mediaStyle}
            component="img"
            alt={data.weatherName}
            height="140"
            image={data.image}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {data.weatherName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Location: {data.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description: {data.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Status: {data.status}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Created Date: {new Date(data.createdDate).toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WeatherCard;
