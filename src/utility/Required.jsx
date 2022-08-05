import { error } from "./styles";

export default function Required() {
  return <span style={{ color: error }}>{` *`}</span>;
}
