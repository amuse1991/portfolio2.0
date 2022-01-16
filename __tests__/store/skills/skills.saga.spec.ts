import { handleFetchSkillsAction } from "@store/modules/skills/skills.saga";
import { apiClient } from "@lib/api/apiClient";
import { call, put } from "redux-saga/effects";

// jest.mock("@lib/api/apiClient");
describe("fetch skills test", () => {
  it("", () => {
    const iterator = handleFetchSkillsAction();

    expect(iterator.next().value).toEqual(call(apiClient, "api/skills"));

    // 3. redux에 저장하기 위한 effect(`setUserInfo`) 생성
    expect(iterator.next().value).toEqual(put({ type: "ERROR" }));
    // 4. 실행 완료
    // expect(iterator.next().done).toBeTruthy();
  });
});
