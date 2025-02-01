// import axios from 'axios';

// export const fetchData = async () => {
//   const response = await axios.get('/api/data');
//   return response.data;
// };


// src/containers/DataContainer.js
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../redux/actions/dataActions';
// import { fetchData } from '../services/apiService';

// const DataContainer = () => {
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector((state) => state.data);

//   useEffect(() => {
//     const loadData = async () => {
//       dispatch(fetchDataRequest());
//       try {
//         const result = await fetchData();
//         dispatch(fetchDataSuccess(result));
//       } catch (error) {
//         dispatch(fetchDataFailure(error));
//       }
//     };

//     loadData();
//   }, [dispatch]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </div>
//   );
// };

// export default DataContainer;
