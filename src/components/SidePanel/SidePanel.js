import React, {useState} from 'react'
import css from './SidePanel.module.css'

function SidePanel({facilities}) {

    const [facilityReadings, setFacilityReadings] = useState()

    const updateFacilityReading = () => {
        const id = document.getElementById('facility').value
        const value = Number(document.getElementById('reading').value)
        if (id === 'Select') return
        const newReadings = JSON.parse(JSON.stringify(facilityReadings))
        newReadings[id] = value
        setFacilityReadings(newReadings)
    }

    if (!facilityReadings) {
        const readingsDefault = {}
        facilities.forEach(facility => {
            readingsDefault[facility.id] = 0
        })
        setFacilityReadings(readingsDefault)
    }

    if (!facilityReadings) return null
    return (
        <div className={css.sidepanel}>
            <div className={`${css.panel} ${css.form}`}>
                <select id="facility" aria-label="facility">
                    <option hidden>Select</option>
                    {
                        facilities.map(facility => (
                            <option key={facility.id} value={facility.id}>{facility.name}</option>
                        ))
                    }
                </select>
                <input type="number" id="reading" placeholder="kw" onKeyPress={e => {
                    if (e.keyCode === 0) updateFacilityReading()
                }} />
                <button onClick={updateFacilityReading}>Submit</button>
            </div>
            <div className={css.panel}>
                <table className={css.table}>
                    <thead>
                        <tr>
                            <th>Facility</th>
                            <th>Reading</th>
                            <th>Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            facilities.map(facility => {
                                return (
                                    <tr key={facility.id} className={css.row}>
                                        <td>{facility.name}</td>
                                        <td>{facilityReadings[facility.id]} kw</td>
                                        <td>7/25/2018</td>
                                    </tr>
                                )
                            })
                        }
                        <tr className={css.row}>
                            <td>All</td>
                            <td>
                                {Object.values(facilityReadings).reduce((prev, cur) =>{
                                    return prev + cur
                                } , 0)} 
                                {' '}kw
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SidePanel
