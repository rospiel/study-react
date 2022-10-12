import { isFalse, isNull } from "../../../sdk/utils/objectUtil";
import { LoadingContainer } from "./Loading.styles";

interface LoadingProps {
  show?: boolean
  blur?: boolean
}

export default function Loading(props: LoadingProps) {

  if (isNull(props.show) || isFalse(props.show!)) {
    return null;
  }

  return (
    <LoadingContainer blur={props.blur}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingContainer>
  ) 
}