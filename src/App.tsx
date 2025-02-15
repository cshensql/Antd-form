import "./index.css";
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
  const [switchState, setSwitchState] = useState(data.switchState);
  const toolsOptions = ["Redux", "Lodash", "Ant Design", "Webpack", "Other"];

  const handleRadioChange = (e: RadioChangeEvent) => {
    data.radioValue = e.target.value;
  };
  const handlecCheckboxChange = (checkedTools: string[]) => {
    data.checkedTools = checkedTools;
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    data.firstName = e.target.value;
  };
  const onFinish = () => {
    console.log("Current state:", data);
  };

  // const onFinishFailed = (errorInfo: ValidateErrorEntity<FieldType>) => {
  //   console.log("error:", errorInfo);
  // };

  return (
    <section className="container m-4 p-4 max-w-[400px]">
      <div className="flex flex-row justify-between items-center text-xl font-medium my-4">
        <p>Editable</p>
        <Switch
          value={switchState}
          onChange={(checked) => setSwitchState(checked)}
        />
      </div>
      <Form
        className="flex flex-col gap-y-4"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        disabled={!switchState}
      >
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input placeholder="First Name" onChange={handleTextChange} />
        </Form.Item>

        <p>Are you proficient in ReactJS development?</p>
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
          <p>Which tools do you use?</p>
          <p>Please select all that apply.</p>
        </div>
        <Form.Item name="checkedTools">
          <Checkbox.Group
            className="!flex flex-col"
            options={toolsOptions}
            defaultValue={data.checkedTools}
            onChange={handlecCheckboxChange}
          />
        </Form.Item>
        <Form.Item className="flex justify-center *:w-[70%]">
          <Button
            type="primary"
            color="purple"
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
