import React  from 'react';
import { useState,useEffect } from 'react';
import {View} from './View'

function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://www.nbrb.by/api/exrates/rates?periodicity=0")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
     
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
            <View item ={item} />
        ))}
        {/* {items.map(item => (
          <tr >
            {item.Cur_Name}
            <td>
             {item.Cur_OfficialRate}
             </td>
          </tr>
        ))} */}
      </ul>
    );
  }
}

export default MyComponent;
