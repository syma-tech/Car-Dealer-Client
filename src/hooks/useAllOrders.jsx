import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllOrders = () => {
  const axiosSecure = useAxiosSecure();

  const { data: totalOrders = [], refetch } = useQuery({
    queryKey: [`orders`],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders`);
      console.log(res.data);
      return res.data;
    },
  });
  return [totalOrders, refetch];
};

export default useAllOrders;
