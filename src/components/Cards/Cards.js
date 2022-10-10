import React from "react"

export default function Cards({data}) {
  console.log(data.current.temp)
  return(
    <div>
      <p>{data.current.temp}</p>
    </div>
  )
}