import React from 'react'
import Button from './Button'
import Demo from '../assets/download.jfif'
import SuggestImage from './SuggestImage'

const RightSide = () => {
  return (
    <div className='right-side'>
        <div className="upload-image">
              <p>Your Ai Style</p>
              <label htmlFor="file">
                <input type="file" id='file' hidden></input>
                Upload Your Outfit Photo
              </label>
              <div className="demo-img">
                   <img src={Demo}></img>
              </div>
        </div>
        <div className="suggest">
             <Button text={'Suggested Matching items'} size="14.5px"/>
             <p>Suggested matching Accessories</p>
             <div className="suggest-img">
                  <SuggestImage />
                  <SuggestImage />
                  <SuggestImage />
                  <SuggestImage />
                  <SuggestImage />
                  <SuggestImage />
             </div>
        </div>
    </div>
  )
}

export default RightSide