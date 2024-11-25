import React from "react";
import GreetingCards from "./Components/GreetingCards";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header/>

      <div className="flex flex-wrap justify-center gap-6 p-8">
    <GreetingCards title={"Happy Birthday!"} message={"Wishing you a fantastic day filled with joy!"}/>
      <GreetingCards title={"Congratulations!"} message={"Great Job on your Achievements!"}/>
      <GreetingCards title={"Thank you!"} message={"Thanks for your kindness and support!"}/>
      </div>
      
    </div>
  );
};

export default App;
