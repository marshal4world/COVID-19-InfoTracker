import React, { useState, useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api'
import Select from 'react-select'

const CountryPicker = ( { handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([])
    const [selected, setSelected] = useState({label: 'Global', value: 'global'})

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setFetchedCountries( await fetchCountries())
        }
        fetchCountriesAPI()

    }, [setFetchedCountries])

    const handleChange = (data) => {
        setSelected(data)
        handleCountryChange(data.value)
    }
    
    var options = [
        {label: 'Global', value: 'global'}
    ]
    fetchedCountries.map((country) => options.push({label: country, value: country}))
    return (
        <div>
            <p>Pick a country to see the tracked data ...</p>
            <Select className={styles.selectComponent} value={selected} options={options} onChange={(selected) => handleChange(selected)}/>
        </div> 
    )
}
export default CountryPicker