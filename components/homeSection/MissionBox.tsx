import { MissionType } from "@/types/missionTypes";
import { IoWater } from "react-icons/io5";
import { BiWalk } from "react-icons/bi";
import { CgPill } from "react-icons/cg";
import { ImSpoonKnife } from "react-icons/im";
const arr = {
  BiWalk,
  CgPill,
  ImSpoonKnife,
  IoWater,
};

const MissionBox = ({ mission }: { mission: MissionType }) => {
  return (
    <div>
      <div>
        {/* {arr && arr.} */}
        <div>{mission.name}</div>
        <button>완료</button>
      </div>
    </div>
  );
};

export default MissionBox;
