import React from 'react'
import { Loader } from '../../components';
import Cards from './Cards';

const DataSection = ({ loading, data, active, toggle }) => {
  return (
    <div>
      {
        loading ? (
            <div className='flex items-center justify-center my-20'>
              <Loader />
            </div>
        ) : (
            !data[0] ? (
                <div>
                    <h1 className='text-center text-2xl font-bold'>No data exists</h1>
                </div>
            ) : (
                <div className='grid grid-cols-4 gap-6 mt-20'>
                    {
                        data?.map((data)=> (
                            <Cards data={data} key={data?._id} active={active} toggle={toggle} />
                        ))
                    }
                </div>
            )
        )
      }
    </div>
  )
}

export default DataSection;
