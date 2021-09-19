import React from "react";
import ReactDOM from "react-dom";
import SingleComponent from "./SingleComponent";
import profile1 from "./image/pic-1.jpg";
import profile2 from "./image/pic-2.jpg";
import profile3 from "./image/pic-3.jpg";
import UseCard from "./UseCard";

const App = () => {
  return (
    <div className="ui comments">
      <UseCard>
        <div>Hello my name is Sarah, and I am live in Instanbul</div>
      </UseCard>
      <UseCard>
        <SingleComponent
          name="Sarah"
          image={profile1}
          date="Today at 5:00PM"
          text="it is amazing"
        />
      </UseCard>

      <UseCard>
        <SingleComponent
          name="Alex"
          image={profile2}
          date="Today at 6:00PM"
          text="Great job"
        />
      </UseCard>
      <UseCard>
        <SingleComponent
          name="Jack"
          image={profile3}
          date="Today at 7:00PM"
          text="Thanks..."
        />
      </UseCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
