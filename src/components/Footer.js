import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Thuộc Nguyễn Hải Đăng 
          <img src="https://api.netlify.com/api/v1/badges/d39e7176-80d8-4889-be1d-2462c3c352d6/deploy-status">
        </span>
      </div>
    </footer>
  </div>
)
