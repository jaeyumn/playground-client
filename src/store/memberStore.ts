import { MemberDetail } from "_types/member"
import { create } from "zustand"

interface MyMemberDetailStore {
  myDetail: MemberDetail | null | undefined
  clear: () => void
  setMyDetail: (memberDetail: MemberDetail) => void
}

export const getMyMemberDetailStore = create<MyMemberDetailStore>(set => ({
  myDetail: undefined,
  clear: () => set({ myDetail: undefined }),
  setMyDetail: (memberDetail: MemberDetail) =>
    set(state => ({ ...state, myDetail: memberDetail })),
}))

export default getMyMemberDetailStore
