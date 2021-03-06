import React, { useEffect, useState } from 'react'
import Album from "./Album"

const AlbumList = ({ albums, isVertHoriz, isContentSolt, gangr }) => {
  const [re, setRenewal] = useState(albums)
  var aList = albums

  // 순서 정렬
  function contentSolt() {
    switch (isContentSolt) {
      case "인기":
        aList.sort((a, b) => {
          return b.like - a.like
        })
        break
      case "최신":
        aList.sort((a, b) => {
          return b.date.getTime() - a.date.getTime()
        })
        break
    }
  }

  //장르 필터
  function strainer() {
    if (gangr != "") {
      aList = aList.filter((element) => {
        if (element.type == gangr) return true
    })}
  }

  useEffect(() => {
    aList = albums
    contentSolt()   // 정렬
    strainer()  // 필터
    setRenewal(aList)
  }, [albums, isVertHoriz, isContentSolt, gangr])

  return (
    re.map((album, index) => (
      <Album album={album} isVertHoriz={isVertHoriz} key={index} />
    ))
  )
}

export default AlbumList