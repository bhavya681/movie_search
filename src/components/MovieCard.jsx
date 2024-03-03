/*
import React from 'react'

const MovieCard = ({ allMovieData, loading }) => {
  return (
    <div>
      {loading ?
        <div className='flwx justify-center'>
          <img src='https://i.giffer.com/ZZSH.gif' alt="" />
        </div>
        :
        <div className='flex flex-wrap px-4 lg:px-10 '>
          {
            allMovieData.map((item, index) => {
              const { Title, Year, Poster } = item;
              return (
                <>
                  <div key={index} className="p-2 md:w-1/4 w-full">
                    <div className="bg-[#40407a] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-200">
                      <img className='rounded-lg w-full h-full mb-2' src={Poster} alt="" />
                      <h2 className='text-xl text-white font-bold'>{Title}</h2>
                      <h2 className='text-lg text-white mb-2'>Year : {Year}</h2>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      }
    </div >
  )
}

export default MovieCard

*/

import React from 'react'

const MovieCard = ({ allMovies, loading }) => {
  return (
    <>
      {loading ?
        (
          <>
            <div className='flwx justify-center'>
              <img src='https://i.giffer.com/ZZSH.gif' alt="" />
            </div>
          </>
        )
        : (
          <>
            <div className='flex flex-wrap px-4 lg:px-10 '>
              {
                allMovies.map((item, index) => {
                  const { Title, Year, Poster } = item;
                  return (
                    <>
                      <div key={index} className="p-2 md:w-1/4 w-full">
                        <div className="bg-[#40407a] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-200">
                          <img className='rounded-lg w-full h-full mb-2' src={Poster} alt="" />
                          <h2 className='text-xl text-white font-bold'>{Title}</h2>
                          <h2 className='text-lg text-white mb-2'>Year : {Year}</h2>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </>
        )
      }
    </>
  )
}

export default MovieCard

// import React from 'react'

// const MovieCard = ({ loading, allMovies }) => {

//   return (
//     <div>
//       {loading ?
//         (
//           <>
// <div className='flwx justify-center'>
//   <img src='https://i.giffer.com/ZZSH.gif' alt="" />
// </div>
//           </>
//         )
//         :
//         (
//           <>
//             <div className='flex flex-wrap px-4 lg:px-10 '>
//               {
//                 allMovies.map((item, index) => {
//                   const { Title, Year, Poster } = item;
//                   return (
//                     <>
//                       <div key={index} className="p-2 md:w-1/4 w-full">
//                         <div className="bg-[#40407a] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-200">
//                           <img className='rounded-lg w-full h-full mb-2' src={Poster} alt="" />
//                           <h2 className='text-xl text-white font-bold'>{Title}</h2>
//                           <h2 className='text-lg text-white mb-2'>Year : {Year}</h2>
//                         </div>
//                       </div>
//                     </>
//                   )
//                 })
//               }
//             </div>
//           </>
//         )}
//     </div>
//   )
// }

// export default MovieCard


