import { TextInput } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled(TextInput)`
flex: 1;
min-height: 56px;
max-height: 56px;

${({theme})=> css`
background-color: ${theme.COLORS.GRAY_700};
color:${theme.COLORS.WHITE};
font-family: ${({theme})=>theme.FONT_FAMILY.REGULAR};
font-size: ${({theme})=>theme.FONT_SIZE.MD}px;
`}



border-radius: 6px;
padding: 12px;
`