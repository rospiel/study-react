import { Component } from "react";
import styled from "styled-components";
import ErrorDisplay from "./ErrorDisplay/ErrorDisplay";
import { transparentize } from 'polished';

interface Props {}
interface State {
  hasError: boolean;
  error?: {
    message?: string
  }
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error: {
        message: error.message
      }
    }
  }

  public render() {
    return this.state.hasError ? 
    <Container>
      <ErrorDisplay message={this.state.error?.message} small={true}/>
    </Container>
     : this.props.children;
  }
}

export default ErrorBoundary;

const Container = styled.div`
  padding: 24px;
  border: 1px solid ${transparentize(0.9, '#274060')};
`