import { useSelector } from "react-redux";
import Default from "./Default";
import { useEffect } from "react";
import Features from "./utils/Features";
import { featureBox } from "./redux/slices/globalSlice";

function App() {
 
  const isFeatureBoxOpen = useSelector(featureBox);
  return <>{isFeatureBoxOpen === 1 ? <Features/> : <Default/>}</>;
}

export default App;
