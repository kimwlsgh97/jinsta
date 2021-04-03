import { prisma } from "../../../generated/prisma-client";
export default {
  User: {
    posts: ({ id }) => prisma.user({ id }).posts(),
    following: ({ id }) => prisma.user({ id }).following(),
    followers: ({ id }) => prisma.user({ id }).followers(),
    likes: ({ id }) => prisma.user({ id }).likes(),
    comments: ({ id }) => prisma.user({ id }).comments(),
    rooms: ({ id }) => prisma.user({ id }).rooms(),
    postCounts: ({ id }) =>
      prisma
        .postsConnection({ where: { user: { id } } })
        .aggregate()
        .count(),
    followingCount: ({ id }) =>
      prisma
        .usersConnection({ where: { followers_some: { id } } })
        .aggregate()
        .count(),
    followersCount: ({ id }) =>
      prisma
        .usersConnection({ where: { following_some: { id } } })
        .aggregate()
        .count(),

    fullName: (parent) => {
      // console.log(parent);
      return `${parent.firstName} ${parent.lastName}`;
    },
    isFollowing: async (parent, _, { response }) => {
      const { user } = response.req;
      //현재 로그인 정보
      const { id: parentId } = parent;
      //parent 안의 id 정보를 가져와서 parentId 변수에 넣음
      //parent = 사용자가 보고 있는 게시물 정보
      try {
        return prisma.$exists.user({
          AND: [
            {
              id: user.id,
            },
            {
              following_some: {
                id: parentId,
              },
            },
          ],
        });
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    isSelf: (parent, _, { response }) => {
      const { user } = response.req;
      const { id: parentId } = parent;
      return user.id === parentId;
    },
  },
};

//한명의 유저의 모든 활동 정보 가져오기
