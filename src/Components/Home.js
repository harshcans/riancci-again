import React from 'react'
import { Navbar } from './Navbar';
import { Products } from './Products'

export function Home({user}) {

   

    return (
        <div className='wrapper'>
            <Navbar user={user} />
            <Products />
        </div>
    )
}
