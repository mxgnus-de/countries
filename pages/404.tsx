import styled from 'styled-components';
import { NextPage } from 'next';
import Meta from 'components/styles/Meta/Meta';
import Container from 'components/Container/Container';

const PageError404: NextPage = () => {
   return (
      <>
         <Meta
            meta={{
               title: 'Error • 404',
               description: 'Page not found',
            }}
         />
         <Container>
            <div>
               <ErrorCode>404</ErrorCode>
               <ErrorMessageWrapper>
                  <ErrorMessage>Page not found.</ErrorMessage>
               </ErrorMessageWrapper>
            </div>
         </Container>
      </>
   );
};

const ErrorCode = styled.h1`
   display: inline-block;
   border-right: 1px solid rgba(255, 255, 255, 0.74);
   margin: 0;
   margin-right: 20px;
   padding: 10px 23px 10px 0;
   font-size: 24px;
   font-weight: 500;
   vertical-align: top;
`;

const ErrorMessageWrapper = styled.div`
   display: inline-block;
   text-align: left;
   line-height: 49px;
   height: 49px;
   vertical-align: middle;
`;

const ErrorMessage = styled.h2`
   font-size: 14px;
   font-weight: normal;
   line-height: inherit;
   margin: 0;
   padding: 0;
`;

export default PageError404;
