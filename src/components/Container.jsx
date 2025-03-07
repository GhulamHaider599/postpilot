import React from 'react'

const Container = ({ className, children }) => {
  return (
    <div className={`w-full max-w-[1290px] mx-auto ${className}`} >
        {children}
    </div>
  )
}

export default Container