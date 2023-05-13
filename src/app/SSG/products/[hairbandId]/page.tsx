export async function generateStaticParams() {
  const hairbands = ['hairband-blue', 'hairband-red'];
  return hairbands.map(h => {
    return {hairbandId: h}
  });
}

const page = async (props: any) => {

  return (
    <div 
    className="widgetHeader"
    style={{
      color: 'red',
      fontFamily: 'Souvenir Bold, sans-serif'}}
    >
      hello
    </div>
  )
}
 
export default page;