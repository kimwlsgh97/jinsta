import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    me: (_, __, { response, isAuthenticated }) => {
      //_는 변수의 이름으로 내가 임의로 지정한 것.
      isAuthenticated(response);
      const { user } = response.req;
      return prisma.user({ id: user.id });
    },
  },
};

// export default {
//   Query: {
//     me: async (_, __, { response, isAuthenticated }) => {
//       //_는 변수의 이름으로 내가 임의로 지정한 것.
//       isAuthenticated(response);
//       const { user } = response.req;
//       const userProfile = await prisma.user({ id: user.id });
//       const posts = await prisma.user({ id: user.id }).posts();
//       return { user: userProfile, posts };
//     },
//   },
// };

//parent(root)는 자신을 호출하는 함수를 뜻한다.

// export default {
//     Query: {
//       me: (_, __, { response, isAuthenticated }) => {
//         //_는 변수의 이름으로 내가 임의로 지정한 것.
//         isAuthenticated(response);
//         const { user } = response.req;
//         return prisma.user({ id: user.id }).$fragment(USER_FRAGMENT);
//       },
//     },
//   };
