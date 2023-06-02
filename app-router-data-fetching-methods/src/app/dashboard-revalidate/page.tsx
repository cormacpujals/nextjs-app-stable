import axios from 'axios';

export const revalidate = 30;

const page = async ({}) => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
  return ( <div>{JSON.stringify(data)}</div> );
}
 
export default page;
