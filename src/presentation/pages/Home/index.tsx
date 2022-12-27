import React from 'react';
import ContainerWrapper from "@organisms/ContainerWrapper";
import { Column, Spacing, Text, RectButton, Color, Icon, IconButton, Row } from '@atoms';
import { laggy, useQuery } from '@swr';
import { openWeatherMap } from '@url';
import { FlatList, Image } from 'react-native';
import Weather from './components/Weather';
import getTimeFromDate from '@utils/getTimeFromDate';

const Home = () => {
  const {data: weatherData} = useQuery(openWeatherMap('weather', {
    units: 'metric',
    lat: -6.111560,
    lon: 106.510773,
    appid: '204f979833f2cfbd2de1611d468612eb'
  }), {
    use: [laggy],
    enabled: true
  });

  const {data: hourly, error} = useQuery(openWeatherMap('forecast', {
    units: 'metric',
    lat: -6.111560,
    lon: 106.510773,
    appid: '204f979833f2cfbd2de1611d468612eb'
  }), {
    use: [laggy],
    enabled: true
  });

  const { list } = hourly || {};
  const { weather, main } = weatherData || {};
  const { description, icon, main: dataWeatherTitle} = weather?.[0] || {};
  const { temp, feels_like } = main || {};

  return(
    <ContainerWrapper
    backgroundColor={Color.Neutral09}
    withSafeArea="topOnly"
    statusBarProps={{
      barStyle: 'dark-content',
      animated: true,
    }}
    navbarProps={{
      fillContainerIndexes: [1],
      items: [
        <RectButton>
          <Icon  name='Search' size={42} color="#fff" />
          <Text margin={{
            l: Spacing.SuperTiny
          }} color={Color.Neutral01} text="Ini Lokasi, Kamu"/>
        </RectButton>,
        <IconButton iconProps={undefined} />
      ],
    }}>
      <Weather description={description} icon={icon} main={dataWeatherTitle} feels={feels_like} temp={temp} />
      <FlatList contentContainerStyle={{
        paddingHorizontal: Spacing.Standard
      }} horizontal data={list} renderItem={({item}) => {
        const { dt_txt, weather, main } = item;
        const { temp } = main;
        const { icon } = weather[0];
        return(
          <Column alignment='center' margin={{
            r:Spacing.Standard
          }}>
            <Text type="l2" color={Color.Neutral01}>{getTimeFromDate(dt_txt)}</Text>
            <Image style={{
                    width:40,
                    height: 40,
                }} source={{
                uri: `https://openweathermap.org/img/w/${icon}.png`
                }} />
            <Text type="l1" color={Color.Neutral01}>{temp}°C</Text>
          </Column>
        )
      }}/>
      <FlatList contentContainerStyle={{
        paddingHorizontal: Spacing.Standard
      }} data={list} renderItem={({item}) => {
        const { dt_txt, weather, main } = item;
        const { temp } = main;
        const { icon } = weather[0];
        return(
          <RectButton style={{
            borderBottomWidth: 1,
            borderColor: Color.Neutral01
          }} arrangement="between" alignment='center'>
            <Text type="l2" color={Color.Neutral01}>{getTimeFromDate(dt_txt)}</Text>
            <Row>
            <Text type="l1" color={Color.Neutral01}>{temp}°C</Text>
            <Image style={{
                    width:40,
                    height: 40,
                }} source={{
                uri: `https://openweathermap.org/img/w/${icon}.png`
                }} />
              <Icon name="Arrow-Right" size={24} color={Color.Neutral01} />
            </Row>
          </RectButton>
        )
      }}/>
    </ContainerWrapper>
  )
}

export default Home;