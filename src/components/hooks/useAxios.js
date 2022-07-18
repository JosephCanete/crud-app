import axios from "axios";
import { useState } from "react";

export default async function useAxios({ endpoint }) {
  const [data, setData] = useState([]);

  const { data: response } = await axios.get(endpoint);
  setData(response);
  return data;
}
