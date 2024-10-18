import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <>
    <div className="card card-1">
        <h2>Dota 2</h2>
        <h4>5x5<span> turbo</span></h4>

        <div className="inner">
            <div>
                <img src="/Icon (1).svg" alt="" />
                <p>Результаты</p>
            </div>
            <div>
                <img src="/Icon (2).svg" alt="" />
                <p>Рассписание</p>
            </div>
            <div>
                <img src="/Icon (3).svg" alt="" />
                <p>Трансляция</p>
            </div>

        </div>
    </div>
    </>
  )
}

export default Card