import CustomInput from "../forms/CustomInput";
import CustomButton from "../forms/CustomButton";

export default function Home() {
  return (
    <>
      <CustomInput
        id="outlined-error"
        label="Name"
        description="Type Something"
      />
      <CustomButton label="Click Me" Row={2} direction="row" />
    </>
  );
}
