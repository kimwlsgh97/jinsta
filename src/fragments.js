// export const COMMENT_FRAGMENT = `
//     id
//     text
//     user{
//       username
//     }
// `;

// export const USER_FRAGMENT = `
//     id
//     avatar
//     username
// `;

// export const FILE_FRAGMENT = `
//     id
//     url
// `;

// export const MESSAGES_FRAGMENT = `
//     id
//     text
//     from{
//       ${USER_FRAGMENT}
//     }
//     to{
//       ${USER_FRAGMENT}
//     }
//     createdAt
// `;
// //다른 fragment의 하위 fragment로 넣기위해선, ``로만 감싸있어야 한다.

// export const ROOM_FRAGMENT = `
//     fragment RoomParts on Room {
//       id
//       participants{
//         ${USER_FRAGMENT}
//       }
//       messages{
//         ${MESSAGES_FRAGMENT}
//       }
//     }
// `;

/*export const FULL_POST_FRAGMENT = `
    fragment PostParts on Post{
        id
        caption
        location
        files{
          id
          url
        }
        user{
          id
          username
        }
        comments{
          id
          text
          user{
            username
          }
        }
    }
`;*/
