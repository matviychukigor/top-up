import { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { WithLayout } from "../layout/Layout";

function Home(): JSX.Element{
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">ferf</Htag>
      <Button appearence="primary" arrow="down">Button</Button>
      <Button appearence="ghost" arrow="right">Button</Button>
      <P size="l">Big</P>
      <P>Medium</P>
      <P size="s">Small</P>
      <Tag size="s" color="red">Small</Tag>
      <Tag size="m" color="green">Green</Tag>
      <Tag size="s" color="grey">Grey</Tag>
      <Tag size="s" color="primary" href="google">primary</Tag>
      <Rating rating={rating} isAditable={true} setRating={setRating}/>
    </>
  );
}

export default WithLayout(Home);
