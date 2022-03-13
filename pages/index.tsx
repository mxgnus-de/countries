import { Search } from '@mui/icons-material';
import Meta from 'components/styles/Meta/Meta';
import Wrapper from 'components/styles/Wrapper/Wrapper';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import { Country } from 'types/Country';
import { getAllCountries } from 'utils/countriesAPI';

interface PageProps {
   countries: Country[];
}

const Home: NextPage<PageProps> = ({ countries }) => {
   const [items, setItems] = useState<Country[]>(countries);
   const [showItems, setShowItems] = useState<number>(15);
   const [search, setSearch] = useState('');

   useEffect(() => {
      getAllCountries().then((json) => {
         setItems(json);
      });
   }, []);

   return (
      <>
         <Meta
            meta={{
               title: 'Countries',
               description: 'Countries API',
            }}
         />
         <Wrapper>
            <SearchBarWrapper>
               <Search />
               <SearchBarInput type='text' placeholder='Search for a country' value={search} onChange={(e) => setSearch(e.target.value)} />
            </SearchBarWrapper>
            <Grid>
               {items
                  .filter((item) => {
                     if(search){
                        console.log(item.name.official,search, item.name.official.startsWith(search))
                        return item.name.official.toLowerCase().startsWith(search.toLowerCase()) || item.name.common.toLowerCase().startsWith(search.toLowerCase())
                     } else {
                        return true
                     }
                  }).sort(function (a, b) {
                     if (a.name.official < b.name.official) {
                        return -1;
                     } else if (a.name.official > b.name.official) {
                        return 1;
                     }
                     return 0;
                  })
                  .slice(0, showItems)
                  .map((country, index) => {
                     return (
                        <Fade
                           key={index}
                           direction='up'
                           style={{
                              display: 'flex',
                              flexDirection: 'column',
                              height: '100%',
                              width: '100%',
                              flexGrow: 1,
                           }}
                           duration={500}
                        >
                           {/* <Link href={`/${country.cca3}`} passHref> */}
                              <Card>
                                 <CardFlag>
                                    <Image
                                       src={country.flags.png}
                                       layout='fill'
                                       alt={country.name.official}
                                    />
                                 </CardFlag>
                                 <CardBody>
                                    <CardTitle>
                                       {country.name.official}
                                    </CardTitle>
                                    <CardProperty
                                       title='Population'
                                       value={country.population.toLocaleString()}
                                    />
                                    <CardProperty
                                       title='Region'
                                       value={country.continents.join(', ')}
                                    />
                                    <CardProperty
                                       title='Capital'
                                       value={
                                          country.capital
                                             ? country.capital.join(', ')
                                             : 'N/A'
                                       }
                                    />
                                 </CardBody>
                              </Card>
                           {/* </Link> */}
                        </Fade>
                     );
                  })}
            </Grid>
            <ShowMoreButton onClick={() => setShowItems((prev) => prev + 15)}>
               Load more
            </ShowMoreButton>
         </Wrapper>
      </>
   );
};

function CardProperty({ title, value }: { title: string; value: string }) {
   return (
      <CardPropertyWrapper>
         <CardPropertyTitle>{title}</CardPropertyTitle>
         <CardPropertyValue>{value}</CardPropertyValue>
      </CardPropertyWrapper>
   );
}

const SearchBarWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: start;
   background-color: ${({ theme }) => theme.secondaryBackgroundColor};
   padding: 5px 2rem;
   border-radius: 10px;
   gap: 10px;
`;

const SearchBarInput = styled.input`

`;

const Grid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   grid-gap: 3rem;
   width: clamp(300px, 60vw, 1200px);
   padding: 2rem 0;
`;

const Card = styled.div`
   background-color: ${({ theme }) => theme.secondaryBackgroundColor};
   border-radius: 10px;
   padding: 2rem 0;
   height: 100%;
   min-height: 200px;
   cursor: pointer;
   max-width: 350px;
`;

const CardFlag = styled.div`
   position: relative;
   width: 100%;
   height: 168px;
`;

const CardBody = styled.div`
   margin-top: 2rem;
   padding: 0 1rem;
   gap: 7px;
   display: flex;
   flex-direction: column;
`;

const CardTitle = styled.h3`
   text-align: start;
   font-weight: 700;
   margin-bottom: 0.5rem;
`;

const CardPropertyWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
`;

const CardPropertyTitle = styled.span`
   font-weight: 600;
   font-size: 0.9rem;

   &:after {
      content: ':';
   }
`;

const CardPropertyValue = styled.span`
   font-weight: 400;
   font-size: 0.8rem;
`;

const ShowMoreButton = styled.button`
   background-color: ${({ theme }) => theme.secondaryBackgroundColor};
   padding: 10px 20px;
   border-radius: 10px;
`;

export const getStaticProps: GetStaticProps<PageProps> = async () => {
   const allCountries: Country[] = await getAllCountries();

   const filteredCountries = allCountries
      .sort((a, b) => {
         if (a.name.official < b.name.official) {
            return -1;
         } else if (a.name.official > b.name.official) {
            return 1;
         }
         return 0;
      })
      .slice(0, 30);

   return {
      revalidate: 60 * 60 * 24,
      props: {
         countries: filteredCountries,
      },
   };
};

export default Home;
