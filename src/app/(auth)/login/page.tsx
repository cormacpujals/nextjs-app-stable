import axios from "axios"; 

const page = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  throw new Error("error");
  
  return <div>{JSON.stringify(data)}</div>
}
 
export default page;