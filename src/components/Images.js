import React, { useState} from 'react'


export default function Images () {

  const [images, setimages] = useState( [
    "https://images.unsplash.com/photo-1528042182284-cbe0d3da6a42?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aGVyb3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1572201115533-ca2301dd6fad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8aGVyb3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1517414204284-fb7e98b2e255?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlcm9zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1542623024-a797a755b8d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhlcm9zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ])

  const [newImageUrl, setNewImageUrl] = useState("")

  function ShowImage () {
    return images.map((image, index) => {
      return (
        <div className="w-1/3 my-4 flex justify-center" key={index}>
          <img src={image} width="150" onClick={() => handleRemove(index)}/>
        </div >
      );
    })
  }

  function handleAdd () {
    if (newImageUrl !== '') {
      setimages([newImageUrl, ...images]);
      setNewImageUrl("");
    }


  }

  function handleChange (event) {
    setNewImageUrl(event.target.value);
  }

  function handleRemove (index) {
    // setimages(images.filter((image, i) => i !== index))
    setimages([...images.slice(0,index), ...images.slice(index+1,index.length)])
  }

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between mt-5">
        <div className="w-full">
          <input
            type="text"
            className="p-2 border border-gray-800 shadow rounded w-full"
            value={newImageUrl}
            onChange={handleChange} />
        </div>
        <div className="">
          <button
            disabled={newImageUrl === ''}
            className={`p-2  text-white ml-2 ${newImageUrl !== '' ? 'bg-green-600' : 'bg-green-300'}`} onClick={handleAdd}>
              Add
          </button>
        </div>
      </div>
    </section>
  )
}


