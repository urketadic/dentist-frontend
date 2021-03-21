import { Select } from 'antd';
import {connect} from connect;

const { Option } = Select;

ReactDOM.render(
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.child.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.child.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="1">{dentis}</Option>
    <Option value="2">{dentist}</Option>
    <Option value="3">{dentist}</Option>
    <Option value="4">{dentist}</Option>
  
  </Select>,
  mountNode,
);

export default connect((state)=>({credentials:state.credentials}))(Select)