import "./index.css";
import "./App.css";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Switch,
} from "antd";
import { useState } from "react";
import data from "./data";

function App() {
  const [radioValue, setRadioValue] = useState(data.radioValue);
  const toolsOptions = ["Redux", "Lodash", "Ant Design", "Webpack", "Other"];
  const [checkedTools, setCheckedTools] = useState(data.checkedTools);

  const radioOnChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
  };
  return (
    <section className="container m-4 p-4">
      <div className="flex flex-row justify-between items-center text-xl font-medium my-4">
        <p>Editable</p>
        <Switch></Switch>
      </div>
      <Form className="flex flex-col gap-y-4">
        <Input placeholder="First Name" />
        <p>Are you proficient in ReactJS development?</p>
        <Radio.Group
          className="!flex flex-col"
          value={radioValue}
          onChange={radioOnChange}
          options={[
            { value: false, label: "No" },
            { value: true, label: "Yes" },
          ]}
        />
        <div>
          <p>Which tools do you use?</p>
          <p>Please select all that apply.</p>
        </div>
        <Checkbox.Group
          className="!flex flex-col"
          options={toolsOptions}
          value={checkedTools}
          onChange={setCheckedTools}
        />
        <Button type="primary" color="purple">
          Process
        </Button>
      </Form>
    </section>
  );
}

export default App;
