import { TSkill } from "types/api/skills";
import { browserApiClient as apiCilent } from "./apiClient";

export const getSkills = () => apiCilent.get<TSkill[]>("api/skills");
