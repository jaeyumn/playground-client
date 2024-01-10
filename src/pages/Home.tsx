import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>하이여</p>
      <Link to="/about">정보보기</Link>
    </div>
  )
}
