import {useEffect} from "react";
import { TRootState } from "../../store";
import {useSelector, useDispatch} from 'react-redux'
import { clearInfo, updateInfo } from "../../store/ProductInfoSlice";
import { getProductInfo } from "../../services/ProductApi";

interface TDispatchInfo{productId: string}

const useDispatchInfo = ({productId}: TDispatchInfo) => {
    let dispatch = useDispatch();
    let productInfo = useSelector((state: TRootState) => state.productInfo.product);
    
    useEffect(() => {
        const getApiInfo = async (productId: string) => {
          let productInfoLoaded = await getProductInfo(productId);
          dispatch(updateInfo(productInfoLoaded));
        };
    
        productId && getApiInfo(productId);
        return () => {
          dispatch(clearInfo())
      }
      }, [productId]);

      
    return(
        {
            productInfo
        }
    );
}


export default useDispatchInfo;