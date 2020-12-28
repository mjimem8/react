import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

  // const handleAdd = () => {
  //   setcategories(cats => [...cats, 'HunterXHunter']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories}/>

      {/* <button onClick={handleAdd}>Agregar</button> */}
      
      <ol>
        {
          categories.map((category, i) =>
            <GifGrid key={ category } category={category} />
          )
        }
      </ol>
    </>
  )
}