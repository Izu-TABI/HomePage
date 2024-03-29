import React from 'react'
import '../../src/loading.css';

const Loading = () => {
  return (
    <div className='spinner-area'>
      <div class="spinner-box">
        <div class="blue-orbit leo">
        </div>

        <div class="green-orbit leo">
        </div>

        <div class="red-orbit leo">
        </div>

        <div class="white-orbit w1 leo">
        </div><div class="white-orbit w2 leo">
        </div><div class="white-orbit w3 leo">
        </div>
      </div>
    </div>
  )
}

export default Loading
