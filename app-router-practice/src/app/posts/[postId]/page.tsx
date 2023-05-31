import { FunctionComponent } from 'react'

interface postProps {
  params: {
    postId: string;
  }
}
 
const post: FunctionComponent<postProps> = ({params}) => {
  return ( <div>{params.postId}</div> );
}
 
export default post;