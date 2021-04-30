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
    "01d": <WiDaySunny size={74} color="#000" />,
    "01n": <WiNightClear size={74} color="#000" />,
    "02d": <WiDayCloudy size={74} color="#000" />,
    "02n": <WiNightAltCloudy size={74} color="#000" />,
    "03d": <WiCloud size={74} color="#000" />,
    "03n": <WiCloud size={74} color="#000" />,
    "04d": <WiCloudy size={74} color="#000" />,
    "04n": <WiCloudy size={74} color="#000" />,
    "09d": <WiDayRain size={74} color="#000" />,
    "09n": <WiNightRain size={74} color="#000" />,
    "10d": <WiDayShowers size={74} color="#000" />,
    "10n": <WiNightAltShowers size={74} color="#000" />,
    "11d": <WiDayThunderstorm size={74} color="#000" />,
    "11n": <WiNightAltThunderstorm size={74} color="#000" />,
    "13d": <WiDaySnow size={74} color="#000" />,
    "13n": <WiNightSnow size={74} color="#000" />,
    "50d": <WiDayFog size={74} color="#000" />,
    "50n": <WiNightFog size={74} color="#000" />,
  };
  return codeMapping[icon];
}
