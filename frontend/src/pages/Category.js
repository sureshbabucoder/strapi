import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery,gql } from '@apollo/client';
import {Link} from 'react-router-dom';


const CATEGORY=gql`
query GetCategory($id:ID!){
  category(id:$id){
    data{
      id,
      attributes{
        name
      },
      id,
      attributes{
        reviews{
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
    }
    }
  }
`

const Category = () => {
  const {id}=useParams();
  const {loading,error,data}=useQuery(CATEGORY,{variables:{id:id}})

  if(loading){
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>Error :(</h1>
  }
  console.log(data);
  return (
    <>
      <h2 style={{color:'red'}}>{data.category.data.attributes.name}</h2>
      {
        data.category.data.attributes.reviews.data.map(review=>{
          return (
            <div key={review.id} className='review-card'>
              <div className='rating'>
                {review.attributes.rating}
              </div>
                <h2>{review.attributes.title}</h2>
                <p>{review.attributes.body.substring(0,200)}......</p>
                <Link to={`/details/${review.id}`}>Read More</Link>
            </div>
            )
          }
        )
      }
  </>
  )
}

export default Category