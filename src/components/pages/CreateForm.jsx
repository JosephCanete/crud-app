import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function CreateForm() {
  const [cardList, setCardList] = useState([]);

  const spawnCards = () => {
    return setCardList((prevValue) => [
      ...prevValue,
      `data_${prevValue.length + 1}`,
    ]);
  };

  const removeCards = (index) => {
    const selectedCards = cardList[index];
    const filteredData = cardList.filter((data) => data !== selectedCards);
    //Update state
    setCardList(filteredData);
    console.log(cardList);
  };

  return (
    <div>
      {cardList.length === 0 && (
        <Button
          style={{ margin: "2rem" }}
          variant="outlined"
          color="error"
          onClick={spawnCards}
        >
          START ADDING HERE
        </Button>
      )}
      {cardList.map((item, index) => (
        <Card style={{ margin: "3rem 2rem" }} key={index}>
          <CardContent>{item}</CardContent>
          {cardList.length - 1 === index && (
            <Button variant="text" color="success" onClick={spawnCards}>
              Add MORE
            </Button>
          )}
          <Button
            variant="text"
            color="warning"
            onClick={() => removeCards(index)}
          >
            REMOVE ITEM
          </Button>
        </Card>
      ))}
    </div>
  );
}
