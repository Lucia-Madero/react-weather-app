import React from "react";

import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiDayRain,
  WiNightRain,
  WiDayShowers,
  WiNightAltShowers,
  WiDayThunderstorm,
  WiNightAltThunderstorm,
  WiDaySnow,
  WiNightSnow,
  WiDayFog,
  WiNightFog,
} from "weather-icons-react";

export default function WeatherIcon(props) {
  let icon = props.code;
  const codeMapping = {
    "01d": <WiDaySunny size={props.size} color="#000" />,
    "01n": <WiNightClear size={props.size} color="#000" />,
    "02d": <WiDayCloudy size={props.size} color="#000" />,
    "02n": <WiNightAltCloudy size={props.size} color="#000" />,
    "03d": <WiCloud size={props.size} color="#000" />,
    "03n": <WiCloud size={props.size} color="#000" />,
    "04d": <WiCloudy size={props.size} color="#000" />,
    "04n": <WiCloudy size={props.size} color="#000" />,
    "09d": <WiDayRain size={props.size} color="#000" />,
    "09n": <WiNightRain size={props.size} color="#000" />,
    "10d": <WiDayShowers size={props.size} color="#000" />,
    "10n": <WiNightAltShowers size={props.size} color="#000" />,
    "11d": <WiDayThunderstorm size={props.size} color="#000" />,
    "11n": <WiNightAltThunderstorm size={props.size} color="#000" />,
    "13d": <WiDaySnow size={props.size} color="#000" />,
    "13n": <WiNightSnow size={props.size} color="#000" />,
    "50d": <WiDayFog size={props.size} color="#000" />,
    "50n": <WiNightFog size={props.size} color="#000" />,
  };
  return codeMapping[icon];
}
