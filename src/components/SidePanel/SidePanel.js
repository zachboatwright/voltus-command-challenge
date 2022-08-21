import React from 'react'
import css from './SidePanel.module.css'

function SidePanel() {

    return (
        <div className={css.sidepanel}>
            <div className={css.panel}>
                upper
            </div>
            <div className={css.panel}>
                lower
            </div>
        </div>
    )
}

export default SidePanel
