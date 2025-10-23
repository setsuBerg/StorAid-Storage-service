import React from 'react'
import { SearchForm } from './SearchForm'

export const Footer = () => {
  return (
    <div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">FAQ</a></li>
        </ul>
        <SearchForm />
    </div>
  )
}
export default Footer