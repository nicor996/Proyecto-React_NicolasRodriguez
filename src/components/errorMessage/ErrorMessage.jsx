import "./ErrorMessage.css"
import React, { useEffect, useState } from 'react'

const ErrorMessage = () => {

  return (
    <div className="errorBod">
        <div className="picError">
          <img src="https://res.cloudinary.com/dzwmuwi4k/image/upload/v1670735048/picsReactproyect/Error.svg_1_odqtvn.png" alt="" />
        </div>
      <h1>No se puede acceder a este sitio</h1>
    </div>
  )
}

export default ErrorMessage