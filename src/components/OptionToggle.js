import React from 'react'
import ToggleSwitch from './lib/ToggleSwitch/ToggleSwitch'

const OptionToggle = ({text}) => {
    return (
        <div>
          <ToggleSwitch id="starting-color" checked={checked} onChange={checked => onChange(checked)} />
          <label htmlFor="starting-color">{text}</label>
            
        </div>
    )
}

export default OptionToggle
