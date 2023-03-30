import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type PageContentProps = {
  children: ReactNode;
};

// const PageContent: React.FC<PageContentLayoutProps> = ({ children, maxWidth }) => {
// const PageContent: React.FC<PageContentProps> = ({ children } : {children: PageContentProps} ) => {
const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Flex justify="center" p="16px 0px">
      <Flex width="95%" justify="center" maxWidth="860px">
        {/* LHS */}
        <Flex
          direction="column"
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
        >
          {children && children[0 as keyof typeof children]}
        </Flex>

        {/* RHS */}
        <Flex
          direction="column"
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
        >
          {children && children[1 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;

// import React from "react";
// import { Box, Flex } from "@chakra-ui/react";

// interface PageContentLayoutProps {
//   maxWidth?: string;
// }

// // Assumes array of two children are passed
// const PageContentLayout: React.FC<PageContentLayoutProps> = ({
//   children,
//   maxWidth,
// }) => {
//   return (
//     <Flex justify="center" p="16px 0px">
//       <Flex width="95%" justify="center" maxWidth={maxWidth || "860px"}>
//         <Flex
//           direction="column"
//           width={{ base: "100%", md: "65%" }}
//           mr={{ base: 0, md: 6 }}
//         >
//           {children && children[0 as keyof typeof children]}
//         </Flex>
//         {/* Right Content */}
//         <Box
//           display={{ base: "none", md: "flex" }}
//           flexDirection="column"
//           flexGrow={1}
//         >
//           {children && children[1 as keyof typeof children]}
//         </Box>
//       </Flex>
//     </Flex>
//   );
// };

// export default PageContentLayout;
