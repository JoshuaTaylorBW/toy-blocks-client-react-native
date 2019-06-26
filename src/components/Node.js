import React from 'react'
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import colors from "../constants/colors";
import Status from "./Status";

const Wrapper = styled.TouchableOpacity`
  margin: 10px;
  padding: 10px;
  border: 1px solid ${colors.border};
  background: ${colors.contentBackground};
  border-radius: 5px;
`;

const Head = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Body = styled.View`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.Text`
  margin-bottom: 6px;
  color: ${colors.primary};
  font-size: 16px;
  font-weight: 700;
`;

const URL = styled.Text`
  margin-top: 2px;
  margin-bottom: 2px;
  color: ${colors.faded};
  font-weight: 500;
`;

const Toolbar = styled.View`
  display: flex;
  justify-content: flex-end;
`;

const BlocksWrapper = styled.View`
  margin: 20px 0;
  text-align: center;
  color: ${colors.danger};
  font-weight: 700;
`;

const Node = ({ node, expanded, toggleNodeExpanded }) => (
  <Wrapper onPress={() => toggleNodeExpanded(node)}>
    <Head>
      <Name>{node.name || "Unknown"}</Name>
      <Toolbar>
        <Status {...node} />
      </Toolbar>
    </Head>
    <Body>
      <URL>{node.url}</URL>
    </Body>
    {expanded && (
      <BlocksWrapper>
        <Text>Blocks go here</Text>
      </BlocksWrapper>
    )}
  </Wrapper>
);

Node.propTypes = {
  node: PropTypes.shape({
    url: PropTypes.string,
    online: PropTypes.bool,
    name: PropTypes.string,
    loading: PropTypes.bool
  }).isRequired,
  expanded: PropTypes.bool,
  toggleNodeExpanded: PropTypes.func.isRequired
};

export default Node;
