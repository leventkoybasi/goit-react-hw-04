import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div>
      <TailSpin
        visible={true}
        height='80'
        width='80'
        color='#473192'
        ariaLabel='tail-spin-loading'
        radius='1'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
}

export default Loader;
