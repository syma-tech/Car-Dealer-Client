import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const axiosSecure = useAxiosSecure();

  const { data: cars = [], refetch } = useQuery({
    queryKey: [`cars`],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cars`);
      return res.data;
    },
  });
  return [cars, refetch];
};

export default useProducts;
