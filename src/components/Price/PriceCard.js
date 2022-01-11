import React from 'react'
import { Card } from './Price.styled';
import {Paragraph,DataContainer, DataIcon,DataTitle} from '../codeChallenge/CodeChallenge.styled';
import { BannerButton } from '../banner/Banner.styled';

export default function PriceCard({basicData,proData}) {
    return (
       <>
        <Card>
          
       {basicData.map((data)=>(
                
       <div className='cardContainer'>
                     
                     <DataContainer flex={'15%'} margin={'0rem'}  flexmedia={'100%'}>
                     <DataIcon style={{'maxHeight': '8vh','margin':'2rem'}} color={'white'}>
                 {data.icon}
                 </DataIcon>
                
                 <DataTitle letterSpacing='0.2rem' color={'#4e4e4e'}>
                 {data.title}
                 </DataTitle>

                 <DataTitle fontWeight='900' fontSize='2rem' color={'#662ce2'}>
                 {data.price}
                 </DataTitle>
                <Paragraph>
                {data.content}
                </Paragraph>
               
                 </DataContainer>
                 <BannerButton style={{ 'margin-left': 'auto' , 'margin-right': 'auto'}} textAlign='center' top="95%" left='0' right='0' position='absolute'	>
					Sign Up
				</BannerButton>
                 
               </div>
              
              
        ))}
       </Card>
       <Card>
          
          {proData.map((data)=>(
                   
          <div className='cardContainer'>
                        
                        <DataContainer flex={'15%'} margin={'0rem'}  flexmedia={'100%'}>
                        <DataIcon style={{'maxHeight': '8vh','margin':'2rem'}} color={'white'}>
                    {data.icon}
                    </DataIcon>
                   
                    <DataTitle letterSpacing='0.2rem' color={'#4e4e4e'}>
                    {data.title}
                    </DataTitle>
   
                    <DataTitle fontWeight='900' fontSize='2rem' color={'#662ce2'}>
                    {data.price}
                    </DataTitle>
                   <Paragraph>
                   {data.content}
                   </Paragraph>
                  
                    </DataContainer>
                    <BannerButton style={{ 'marginLeft': 'auto' , 'marginRight': 'auto'}} textAlign='center' top="95%" left='0' right='0' position='absolute'	>
                       Sign Up
                   </BannerButton>
                    
                  </div>
                 
                 
           ))}
          </Card>
     
       </>
    )
}
