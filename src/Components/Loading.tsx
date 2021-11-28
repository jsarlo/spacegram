import styled from "styled-components"
import React from 'react';
import { TwinSpin } from "react-cssfx-loading/lib";

const StyledLoading = styled.div`
  padding-top: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loading = () => {
  return (
    <StyledLoading>
      <TwinSpin color="#FF0000" width="100px" height="100px" duration="3s" />
    </StyledLoading>
  )
}

export default Loading;