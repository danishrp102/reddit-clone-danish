// import { Community, communityState } from "@/atoms/communitiesAtom";
// import About from "@/components/Community/About";
// import PageContent from "@/components/Layout/PageContent";
// import NewPostForm from "@/components/Posts/NewPostForm";
// import { auth } from "@/firebase/clientApp";
// import useCommunityData from "@/hooks/useCommunityData";
// import { Box, Text } from "@chakra-ui/react";
// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useRecoilValue } from "recoil";

// const SubmitPostPage: React.FC = () => {
//   const [user] = useAuthState(auth);
//     const communityStateValue = useRecoilValue(communityState);
//   // const { communityStateValue } = useCommunityData();
//   console.log("COMMUNITY", communityStateValue);
//   const { loading } = useCommunityData();

//   return (
//     <PageContent>
//       <>
//         <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
//           <Text>Create a post</Text>
//         </Box>
//         {user && (
//           <NewPostForm
//             user={user}
//             communityImageURL={communityStateValue.currentCommunity?.imageURL}
//           />
//         )}
//       </>
//       <>
//         {communityStateValue && (
//           <About communityData={communityStateValue.currentCommunity} pt={6}
//           onCreatePage
//           loading={loading} />
//         )}
//       </>
//     </PageContent>
//   );
// };
// export default SubmitPostPage;

import NewPostForm from "@/components/Posts/NewPostForm";
import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";
import { communityState } from "../../../atoms/communitiesAtom";
import About from "../../../components/Community/About";
import PageContentLayout from "../../../components/Layout/PageContent";
import { auth } from "../../../firebase/clientApp";
import useCommunityData from "../../../hooks/useCommunityData";

const SubmitPostPage: NextPage = () => {
  const [user, loadingUser, error] = useAuthState(auth);
  const router = useRouter();
  const { community } = router.query;
  // const visitedCommunities = useRecoilValue(communityState).visitedCommunities;
  const communityStateValue = useRecoilValue(communityState);
  const { loading } = useCommunityData();

  /**
   * Not sure why not working
   * Attempting to redirect user if not authenticated
   */
  useEffect(() => {
    if (!user && !loadingUser && communityStateValue.currentCommunity?.id) {
      router.push(`/r/${communityStateValue.currentCommunity?.id}`);
    }
  }, [user, loadingUser, communityStateValue.currentCommunity]);

  console.log("HERE IS USER", user, loadingUser);

  return (
    <PageContentLayout >
      <>
        <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
          <Text fontWeight={600}>Create a post</Text>
        </Box>
        {user && (
          <NewPostForm
            communityImageURL={communityStateValue.currentCommunity?.imageURL}
            user={user}
          />
        )}
      </>
      {communityStateValue.currentCommunity && (
        <>
          <About
            communityData={communityStateValue.currentCommunity}
            pt={6}
            onCreatePage
            loading={loading}
          />
        </>
      )}
    </PageContentLayout>
  );
};

export default SubmitPostPage;
