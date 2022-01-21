import skillsSlice from "@store/modules/skills/skills.slice";
import { useDispatch } from "react-redux";

export default function useSkills() {
  const dispatch = useDispatch();
  const fetchSkills = () => {
    const action = skillsSlice.actions.fetchSkills.name;
    dispatch(action);
  };
  return { fetchSkills };
}
