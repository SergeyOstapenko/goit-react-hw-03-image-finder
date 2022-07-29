
import { ThreeCircles } from 'react-loader-spinner';
//--------------------------------------------------------//
export const Loader = () => {
  return (
    <ThreeCircles
      wrapperStyle={{
        dispay: 'flex',
        justifyContent: 'center',
        marginTop: 200,
      }}
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="blue"
      innerCircleColor="red"
      middleCircleColor="green"
    />
  );
};