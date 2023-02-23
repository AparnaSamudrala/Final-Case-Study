import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useAxios = (url) => {
  //useRef to make sure it doesn't make a call on it's first render
  const componentMounted = useRef(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (componentMounted.current) {
      setLoading(true);
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          setData(res.data);
          setLoading(false);
        })

        .catch((err) => {
          console.log(err);
          setLoading(false);
          
        });
    }
    return () => {
      //clearing ref on unmount
      componentMounted.current = false;
    };
  }, [url, data.length]);

  return [data, loading];
};

export default useAxios;
