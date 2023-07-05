import React from 'react'
import {Link} from 'react-router-dom';
import { useQuery,gql } from '@apollo/client';

const CATEGORIES=gql`
query GetCategories{
    categories{
        data{
          id,
          attributes{
            name
          }
        }
    }
}
`

const SiteHeader = () => {
    const {loading,data,error}=useQuery(CATEGORIES);
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>Error :(</h1>
    }

//  console.log(data)

  return (
    <div className='site-header'>
        <Link to='/'><h1>Strapi Reviews</h1></Link>
        <nav className='categaries '>
            <span>Filter Reviews By Category :</span>
            {data.categories.data.map(category => (
                <Link to={`/category/${category.id}`} key={category.id} className='a'> 
                    {category.attributes.name}
                </Link>
            ))}
        </nav>
    </div>
  )
}

export default SiteHeader