import React from "react"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div>
      <h1>소개</h1>
      <p>라우터 적용 연습기</p>
      <Link to="/">홈으로!</Link>
    </div>
  )
}
