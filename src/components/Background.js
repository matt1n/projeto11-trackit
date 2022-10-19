import styled from "styled-components";
import { useHref } from "react-router-dom";

export default function Background() {
    const href = useHref()
    return <BackgroundFormat href={href}></BackgroundFormat>
};

const BackgroundFormat = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${props=>props.href==="/" || props.href==="/cadastro" ? "#ffffff" : "#f2f2f2"};
    z-index: -1;
`