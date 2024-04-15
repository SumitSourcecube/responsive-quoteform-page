import React, { useState } from 'react'
import './Dropdown.scss'
import Select from 'react-select';

const Dropdown = ({ id, label, options, defaultValue, required }) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const customStyles = {

        control: (styles, state) => ({
            ...styles, backgroundColor: 'white', border: '1px solid #BEBEBE', borderRadius: '8px', display: 'flex', flexWrap: 'nowrap', width: '100%', height: '52px', paddingRight: '1px', padding: '13px 16px', fontSize: '16px', fontWeight: 600, lineHeight: '23.68px', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            cursor: 'pointer',
            boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(197, 202, 209, 0.5)' : 'none',
            // outline: state.isFocused ? '0 0 0 0.2rem rgba(197, 202, 209, 0.5)' : 'none'
            '&:hover': {
                boxShadow: state.isFocused ? '1px solid rgba(197, 202, 209, 0.5)' : 'none',
                outline: 'none'
            }
        }),
        menu: (provided) => ({
            ...provided,
            background: 'white',
        }),

        indicatorsContainer: (provided) => ({ ...provided, paddingRight: '5px', }),
        dropdownIndicator: (provided) => ({ ...provided, padding: '0px' }),
        valueContainer: (provided) => ({ ...provided, paddingLeft: '8px' }),
        singleValue: provided => ({
            ...provided,
            color: 'black',
        }),
    };


    return (
        <div className='drop-input-component'>
            <Select
                id={id}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                styles={customStyles}
                isSearchable={false}
                components={{
                    IndicatorSeparator: () => null,
                }}
                required={required}
            >
                {/* <option value='' disabled selected>{defaultValue}</option>
                {options?.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))} */}
            </Select>
        </div>
    )
}

export default Dropdown