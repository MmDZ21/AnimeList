import { ApplicationSliderDocument, ApplicationSliderQuery } from '@/generated/graphql';
import { getClient } from '@/lib/apolloClient';
import React from 'react'
import Hero from '../hero';

export default async function Slider() {
      const client = getClient();
    
      const { data, error } = await client.query<ApplicationSliderQuery>({
        query: ApplicationSliderDocument,
      });
    
      if (error) {
        console.error("Error fetching Slider:", error);
        return <p>Error loading slider data.</p>;
      }
    
      const result = data?.applicationSlider;
    
      if (!result) {
        return <p>Content not found.</p>;
      }
  return (
    <Hero slides={result}/>
  )
}
