import React from 'react';

export const View = ({item}) => {
  
    const Name = item.Cur_Name
    const Rate = item.Cur_OfficialRate

    return (
        <div >
          <ul>
            {Name}
            {Rate}
          </ul>
        </div>
    )
}