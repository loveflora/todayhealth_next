import { MissionType } from "@/types/missionTypes";
import styled from "styled-components";
import MissionBox from "./MissionBox";

interface Props {
  missionBoxes?: MissionType[];
}

const MissionContainer = ({ missionBoxes }: Props) => {
  return (
    <Wrap>
      {missionBoxes?.map((missionBox) => (
        <MissionBox key={missionBox.id} mission={missionBox} />
      ))}
    </Wrap>
  );
};

export default MissionContainer;

const Wrap = styled.div``;
