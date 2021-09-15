import React from 'react'
import '../css/styles.css'


export const Inputfield = () => {
    return (
        <form className="input">
        
           <input 
                className="input-message" 
                type="input" 
                placeholder="tapez votre message ici ..." 
            />
            
            <button 
                className="button-send" 
                type="submit"
            > 
                send 
            </button>
        
        </form>
    )
}
