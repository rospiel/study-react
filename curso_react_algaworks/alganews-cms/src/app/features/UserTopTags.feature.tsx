import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { Metric } from "../../sdk/@types";
import MetricService from "../../sdk/services/Metric.service";
import { isFalse, isNull, nonNull } from "../../sdk/utils/objectUtil";
import CircleChart from "../components/CircleChart";

export default function UserTopTags () {
const [topTags, setTopTags] = useState<Metric.EditorTagRatio>();
const [error, setError] = useState<Error>();

useEffect(() => {
  MetricService.getTop3Tags()
  .then(setTopTags)
  .catch(error => {
    setError(new Error(error.message));
  })
}, [])

  if (nonNull(error)) {
    throw error;
  }

  if (isNull(topTags)) {
    return (
        <UserTopTagsContainer>
          <Skeleton height={88} width={88} circle />
          <Skeleton height={88} width={88} circle />
          <Skeleton height={88} width={88} circle />
        </UserTopTagsContainer>
    )
  }

  return <UserTopTagsContainer>
    {
      topTags!.map((tag, indice) => {
        return (
          <CircleChart key={indice} progress={tag.percentage} size={88} caption={tag.tagName} theme={indice === 0 ? 'primary' : 'default'}/>
        )
      })
    }
    </UserTopTagsContainer>
}

const UserTopTagsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`