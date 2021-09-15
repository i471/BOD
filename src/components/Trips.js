import React from 'react'
// import styled from 'styled-components'
// import { useStaticQuery, graphql } from 'gatsby'
// // import Img from 'gatsby-image'
// import { StaticImage } from "gatsby-plugin-image"
// import { Button } from './Button'
// import { ImLocation } from 'react-icons/im'
// import {Img} from 'gatsby-image'

const Trips = () => {
    //     const data = useStaticQuery(graphql`
    //     {
    //       allTripsJson {
    //         edges {
    //           node {
    //             alt
    //             button
    //             name
    //             img {
    //               childrenImageSharp {
    //                 gatsbyImageData(
    //                   width: 100
    //                   blurredOptions: {width: 50}
    //                   placeholder: BLURRED
    //                   transformOptions: {cropFocus: CENTER}
    //                   aspectRatio: 0.7
    //                 )
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   `)


    // function getTrips(data) {
    //     const image = getImage(data.allTripsJson.img)
    //     const tripsArray = []
    //     data.allTripsJson.edges.forEach((item, index) => {
    //         tripsArray.push(
    //             <div key={index}>
    //                 {/* <Img 
    //             src={item.node.img.publicURL}
    //             // fluid={item.node.img.childrenImageSharp.fluid}
    //              /> */}
    //             <GatsbyImage image={image} width={600}/> A
    //                 {/* <StaticImage src={item.node.img.childrenImageSharp.fluid} width={600} alt="Palm Tree" /> */}
    //                 {/* A <GatsbyImage image={getImage(item.node.img)} width={600} alt="Palm Tree" /> */}
    //             </div>
    //         )
    //     })
    //     return tripsArray
    // }
    // function getTrips() {
    //     const tripsArray = []
    //     data.allTripsJson.edges.forEach((item, index) => {
    //         tripsArray.push(
    //             <ProductCard key={index}>
    //                  <StaticImage src="../assets/images/dog1.jpg" width={600} alt="Palm Tree" />
    //                 <ProductInfo>
    //                     <TextWrap>
    //                         <ImLocation/>
    //                         <ProductTitle>Product Title</ProductTitle>
    //                     </TextWrap>
    //                     <Button to="/trips">Button</Button>
    //                 </ProductInfo>
    //             </ProductCard>

    //         )
    //     })
    //     return tripsArray
    // }


    return (
        <></>
        // <ProductsContainer>
        //     <ProductsHeading>
        //         Heading
        //     </ProductsHeading>
        //     {/* <ProductWrapper>{getTrips(data)}</ProductWrapper> */}
        //     <ProductWrapper>
        //         <ProductCard>
        //             <ProductImg src="../assets/images/dog1.jpg" width={200} alt="Palm Tree" />
        //             <ProductInfo>
        //                 <TextWrap>
        //                     <ImLocation />
        //                     <ProductTitle>Product Title</ProductTitle>
        //                 </TextWrap>
        //                 <Button to="/trips">Button</Button>
        //             </ProductInfo>
        //         </ProductCard>
        //     </ProductWrapper>
        // </ProductsContainer>
    )
}

export default Trips

// const ProductsContainer = styled.div`
//     min-height: 100vh;
//     padding: 5rem calc((100vw - 1300px) / 2);
//     background:red;
//     color:#fff;
// `
// const ProductsHeading = styled.div`
//     font-size: clamp(1.2rem, 5vw, 3rem);
//     text-align: center;
//     margin-bottom: 5rem;
//     color: #000;

// `
// const ProductWrapper = styled.div`
//     display: grid;
//     grid-template-columns: repeat(4,1fr);
//     grid-gap: 10px;
//     justify-content: center;
//     padding: 0 2rem;

//     @media screen and (max-width: 1200px){
//         grid-template-columns: 1fr 1fr;
//     };

//     @media screen and (max-width: 868px){
//         grid-template-columns: 1fr ;
//     };
// `

// const ProductCard = styled.div`
//     line-height: 2;
//     width: 100%;
//     height:500px;
//     position: relative;
//     border-radius: 10px;
//     transition: 0.2s ease;

// `

// const ProductImg = styled(Img)`
//     height: 100%;
//     max-width: absolute;
//     position: absolute;
//     border-radius: 10px;
//     filter: brightness(70%);
//     transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

//     &:hover{
//         filter: brightness(100%)
//     }
// `

// const ProductInfo = styled.div``

// const TextWrap = styled.div``

// const ProductTitle = styled.div``
