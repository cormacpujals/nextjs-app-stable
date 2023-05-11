export async function generateStaticParams() {
  const hairbands = ['hairband-blue', 'hairband-red'];
  return hairbands.map(h => {
    return {hairbandId: h}
  });
}

const page = async (props: any) => {
  return <div>hello</div>
}
 
export default page;