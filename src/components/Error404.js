import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => (
    <>
        <Link to="/">Back to home</Link>
        <div className="error-404">Page not found</div>
    </>
)

export default Error404
