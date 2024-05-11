import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div>
        <div className="descriptionbox">
            <div className="descriptionbox-navigator d-flex">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fabe">Reviews (122)</div>
            </div>
            <div className="descriptionbox-descriptionbox d-flex flex-column gap-2 border border-1 p-5 pb-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quidem molestiae voluptas similique error ullam laboriosam odit! Provident odio nemo deserunt quis maiores officiis dolor nihil iure accusantium dolores ex corrupti odit, porro labore! Magnam officia architecto at! Expedita, magnam sapiente? Est, alias. Provident, officiis placeat nam cum cupiditate assumenda?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vero a itaque molestias aperiam alias, quibusdam doloribus tenetur voluptatem blanditiis architecto esse est nulla odit, minus minima facere incidunt saepe?</p>
            </div>
        </div>
    </div>
  )
}

export default DescriptionBox
