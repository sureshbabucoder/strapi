import {Link} from 'react-router-dom'
import { useQuery,gql } from '@apollo/client';

const REVIEWS=gql`
query GetReviews{
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

`

const HomePage = () => {
    const {loading,data,error}=useQuery(REVIEWS);

    if(loading){
            return <h1>Loading...</h1>
        }
    if(error){
            return <h1>Error :(</h1>
        }

    // console.log(data)
  return (
    <>
        {data.reviews.data.map(review=>(
            <div key={review.id} className='review-card'>
                <div className='rating'>
                    {review.attributes.rating}
                </div>
                <h2>{review.attributes.title}</h2>
                <p>{review.attributes.body.substring(0,200)}......</p>
                <Link to={`/details/${review.id}`}>Read More</Link>
            </div>
        ))}

    </>
  )
}

export default HomePage