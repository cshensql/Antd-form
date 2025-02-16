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
import data from "./data";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState(data.firstName);
  const [focus, setFocus] = useState(false);
  const [switchState, setSwitchState] = useState(data.switchState);

  const toolsOptions = ["Redux", "Lodash", "Ant Design", "Webpack", "Other"];
  const labelClass =
    focus || (firstName && firstName.length !== 0)
      ? "label label-float"
      : "label";

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    data.firstName = e.target.value;
    setFirstName(e.target.value);
  };
  const handleRadioChange = (e: RadioChangeEvent) => {
    data.radioValue = e.target.value;
  };
  const handlecCheckboxChange = (checkedTools: string[]) => {
    data.checkedTools = checkedTools;
  };
  const onFinish = () => {
    console.log("Current state:", data);
  };
  return (
    <section className="container m-4 p-4 max-w-[400px]">
      <div className="flex flex-row justify-between items-center mb-6">
        <p>Editable</p>
        <Switch
          checked={switchState}
          onChange={(checked) => setSwitchState(checked)}
        />
      </div>
      <Form
        className="flex flex-col"
        onFinish={onFinish}
        initialValues={{
          checkedTools: data.checkedTools,
        }}
        disabled={!switchState}
      >
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "Please enter your first name!" }]}
        >
          <div onBlur={() => setFocus(false)} onFocus={() => setFocus(true)}>
            <Input
              value={switchState ? firstName : ""}
              onChange={handleTextChange}
            />
            {switchState && <label className={labelClass}>First Name</label>}
          </div>
        </Form.Item>

        <h2>Are you proficient in ReactJS development?</h2>
        <Form.Item
          name="radioValue"
          rules={[{ required: true, message: "Please choose one option!" }]}
        >
          <Radio.Group
            className="!flex flex-col"
            onChange={handleRadioChange}
            options={[
              { value: false, label: "No" },
              { value: true, label: "Yes" },
            ]}
          />
        </Form.Item>

        <div>
          <h2>Which tools do you use?</h2>
          <p>Please select all that apply.</p>
        </div>
        <Form.Item name="checkedTools">
          <Checkbox.Group
            className="!flex flex-col"
            options={toolsOptions}
            onChange={handlecCheckboxChange}
          />
        </Form.Item>
        <Form.Item className="flex justify-center *:w-[70%]">
          <Button
            type="primary"
            htmlType="submit"
            disabled={!switchState}
            block
          >
            Process
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}

export default App;
