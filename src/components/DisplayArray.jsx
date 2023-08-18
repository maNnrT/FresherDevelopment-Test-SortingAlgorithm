/* eslint-disable react/prop-types */

function DisplayArray({arrayOfStrings}) {
  return (
    <div className='text-white mt-5 grid grid-cols-12 '>
    {arrayOfStrings.map((string,index) =>
      <div key={index} className='text-white '>{index+1}. {string}</div>)
    }
  </div>
  )
}

export default DisplayArray