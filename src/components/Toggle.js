import React from 'react'

const Toggle = ({checked, onChange}) => (
    <div>
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
      />
    </div>
  );

export default Toggle
