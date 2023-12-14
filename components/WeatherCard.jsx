'use client';
import { useState } from 'react';
import InputText from './InputText'
export default function WeatherCard() {
	const [show,setShow] =useState('')
	const [city,setCity]=useState('')
	const [humidity,setHumidity]=useState('')
	const [wind,setWind]=useState('')
	const [visibility,setVisibility]=useState('')
	const [temp,setTemp]=useState('')
	const [tempMax,setTempMax]=useState('')
	const [tempMin,setTempMin]=useState('')
	const [date,setDate]=useState('')
	const [weather,setWeather]=useState('')

	const getResponse=(data)=>{
		setShow(data.message);
		if(data.message!='city not found' && data.message!='Nothing to geocode'){
		setCity(data.name)
		setHumidity(data.main.humidity)
		setWind(data.wind.speed)
		setVisibility(data.visibility/100)
		setTemp((data.main.temp-273.15).toFixed(2))
		setTempMax((data.main.temp_max-273.15).toFixed(2) )
		setTempMin((data.main.temp_min-273.15).toFixed(2) )
		setWeather(data.weather[0].main)
		}

		const timeElapsed = Date.now();
		const today = new Date(timeElapsed);
		setDate(today.toDateString())

		// console.log(data)

	}
  return (
    <div className="min-h-screen flex items-center justify-center">
	<div className="flex flex-col bg-white text-black rounded p-4 w-full max-w-xs">
	<div className=''>
		<InputText onChange={getResponse}/>
		{/* <SearchButton className=""/> */}
	</div>
	{show==='city not found'||show==='Nothing to geocode'?<p className='text-center m-2 text-lg'>No City Found</p>:
	<div className=''>
	<div className="font-bold text-xl">{city}</div>
	<div className="text-sm text-gray-500">{date}</div>
	<div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-full">
	<svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
	</div>
	<div className="flex flex-row items-center justify-center mt-6">
		<div className="font-medium text-4xl">{temp}°</div>
		<div className="flex flex-col items-center ml-6">
			<div className='text-lg'>{weather}</div>
			<div className="mt-1">
				<span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
				<span className="text-sm font-light text-gray-500">{tempMax}°C</span>
			</div>
			<div>
				<span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
				<span className="text-sm font-light text-gray-500">{tempMin}°C</span>
			</div>
		</div>
	</div>
	<div className="flex flex-row justify-between mt-6">
		<div className="flex flex-col items-center">
			<div className="font-medium text-sm">Wind</div>
			<div className="text-sm text-gray-500">{wind}k/h</div>
		</div>
		<div className="flex flex-col items-center">
			<div className="font-medium text-sm">Humidity</div>
			<div className="text-sm text-gray-500">{humidity}%</div>
		</div>
		<div className="flex flex-col items-center">
			<div className="font-medium text-sm">Visibility</div>
			<div className="text-sm text-gray-500">{visibility}km</div>
		</div>
	</div>
	</div>
	}
</div>
</div>
  )
}
