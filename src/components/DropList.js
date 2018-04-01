import React from 'react'
import ships from '../ships'

const DropList = ({group, onFiltersChange}) => {
    let groupName = group;
    let groupProp = group;
    let choices = [];

    if (group === "manufacturer.code"){
        groupName = "manufacturer"
        choices = ships.map(ship => {
            return ship.manufacturer.code;
        })
    } else {
        choices = ships.map(ship => {
            return ship[groupProp];
        })
    }

    let choices2 = Array.from(new Set(choices))
    return (
        choices2.map((choice, i) => {
            if (!choice) {
                return false;
            }
        
            return ( 
                <div key={`${groupName}${i}`}>
                    <input 
                        className="fl" 
                        type="checkbox" 
                        value={[choice]} 
                        onChange={onFiltersChange}
                    />
                    <p className="cf">{choice}</p>
                </div>
            );
            
        })
    )
}

export default DropList

  