import React from "react"
import Sidebar from "components/sidebar/Sidebar"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

const SidebarWrapper = styled.div`
  width: 15%;
  min-width: 200px;
  height: 100vh;
`

const MemberLnb = () => {
  return (
    <>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <Outlet />
    </>
  )
}

export default MemberLnb
