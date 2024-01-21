import React from "react"
import Header from "components/header/Header"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

const DefaultLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const Main = styled.div`
  display: flex;
  width: 100%;
`

const MemberGnb = () => {
  return (
    <DefaultLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </DefaultLayout>
  )
}

export default MemberGnb
