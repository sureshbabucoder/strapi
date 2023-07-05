import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useQuery,gql } from '@apollo/client';

const REVIEW=gql`
query GetReview($id:ID!){
    review(id:$id){
      data{
        id,
      attributes{
        title,
        rating,
        body
      }
      }
    }
  }

`
const ReviewDetails = () => {
    const { id } = useParams();
    const {loading, error,data}=useQuery(REVIEW,{variables:{id:id}})
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>Error :(</h1>
    }
    // console.log(data)
    // console.log(data.review.attributes.rating)
  return (
    <>
    <div className='review-card'>
        <div className='rating'>
            {data.review.data.attributes.rating}
        </div>
        <h2>{data.review.data.attributes.title}</h2>

        <p>{data.review.data.attributes.body}</p>
    </div>
    <Link to='/'>Back</Link>
    </>
  )
}

export default ReviewDetails