import { error } from "../utils/styles";

export default function Required() {
  return <span style={{ color: error }}>{` *`}</span>;
}
