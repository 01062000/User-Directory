import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
 
const Clock = () => {
 
    const [country, setCountry] = useState('Asia/Kolkata');
 
    const [countries, setCountries] = useState([]);
    const [timezone, setTimezone] = useState();
 
 
 
    const getCounties = async() => {
        console.log("get countries")
        const countiresResponse = await fetch('https://worldtimeapi.org/api/timezone');
        const countries = await countiresResponse.json();
        setCountries(countries);
    }
 
    const getTimeZone = async () => {
        console.log(country)
        const timezoneResponse = await fetch(`https://worldtimeapi.org/api/timezone/${country}`)
        const newTimezone = await timezoneResponse.json();
        setTimezone(prev => new Date(newTimezone.unixtime * 1000));
    }
 
    function handleCountry(e){
        setCountry(e.target.value)
    }
 
    useEffect(() => {
        console.log("country")
        const clockInterval = setInterval(() => {
            getTimeZone();
        }, 1000)
 
        return () => clearInterval(clockInterval);
    }, [country])
 
    useEffect(() => {
        getCounties();
    }, [])
 
    return (
        <>
            <select name="countries" id="countries" onChange={e => handleCountry(e)} value={country}>
                {countries.map((country, index) => <option key={index} value={country}>{country}</option>)}
            </select>
 
            <p>{timezone?.getHours()} : {timezone?.getMinutes()} : {timezone?.getSeconds()}</p>
        </>
    )
}
 
export default Clock