import { isFalse, isNull } from "../../../sdk/utils/objectUtil";
import { LoadingContainer } from "./Loading.styles";

interface LoadingProps {
  show?: boolean
}

export default function Loading(props: LoadingProps) {

  if (isNull(props.show) || isFalse(props.show!)) {
    return null;
  }

  return (
    <LoadingContainer>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingContainer>
  ) 
}