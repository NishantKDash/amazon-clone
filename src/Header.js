import React from 'react'
import './header.css'

function Header() {
  return (
    <div class = 'header'>
        <img class ="header_logo"
            src = "https://pngimg.com/uploads/amazon/amazon_PNG1.png"
        />

        <div class = "header_search">
            <input class = "header_searchInput" type = "text"></input>
        </div>
    </div>
  )
}

export default Header