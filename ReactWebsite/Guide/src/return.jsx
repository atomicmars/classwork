import React, {useEffect, useState} from 'react'

export default function ReturnTop() {
  const [ReturnTop, setReturnTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50) {
        setReturnTop(true)
      } else {
        setReturnTop(false)
      }
    })
  }, [])

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return <div className="App">
    {ReturnTop && (
      <buttoon style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        height: "50px",
        width: "50px",
        fontSize: "50px",
      }}
      onClick={ScrollTop}>↑</buttoon>
    )}
  </div>
}