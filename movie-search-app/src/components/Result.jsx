import React from 'react'

export default function Result(props) {

  const allMovies = props.movies.map(
    (item, index)=>{
      return <Box key={index} image={item.poster_path} title={item.original_title} rating={item.vote_average} />
    }
  )

  return (
    <div className='w-full grid sm:grid-cols-2 md:grid-cols-4 gap-5'>
      {allMovies}
    </div>
  )
}


const Box = (props)=>{
  const imgPath = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className='shadow min-h-[180px] mt-4'>
      <img src={imgPath+props.image} alt="" className='w-full'/>
      <div className="flex justify-between items-center p-4 gap-3">
        <h3 className='text-2xl'>{props.title}</h3>
        <span className='text-xl text-yellow-500 font-bold'>{props.rating}</span>
      </div>
    </div>
  )
}