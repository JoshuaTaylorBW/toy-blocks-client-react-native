import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styled from "styled-components";
import colors from "../constants/colors";

const Wrapper = styled.View`
  border: 2px solid ${props => colors[props.color]};
  border-radius: 2px;
  padding: 0 4px;
  color: ${props => colors[props.color]};
  font-size: 12px;
  font-weight: 500;
  min-width: 38px;
  text-align: center;
`;

const Status = ({ loading, online }) => {
  return (
    <Wrapper color={loading ? "warning" : online ? "success" : "danger"}>
      <Text>{loading ? "Loading" : online ? "Online" : "Offline"}</Text>
    </Wrapper>
  );
};

Status.propTypes = {
  online: PropTypes.bool,
  loading: PropTypes.bool
};

export default Status;
