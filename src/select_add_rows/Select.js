import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Table, Tag } from "antd";
import { useState } from "react";

function Select() {
  const [alreadySelectedRows, setAlreadySelectedRows] = useState(["1", "3"]);
  const columns = [
    {
      title: "Student ID",
      dataIndex: "id",
    },
    {
      title: "Student Name",
      dataIndex: "name",
    },
    {
      title: "Student Grade",
      dataIndex: "grade",
      render: (tag) => {
        const color = tag.includes("A")
          ? "Green"
          : tag.includes("B")
          ? "blue"
          : "red";
        return (
          <Tag color={color} key={tag}>
            {tag}
          </Tag>
        );
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Student Name 1",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "Student Name 2",
      grade: "A",
    },
    {
      key: "3",
      id: 3,
      name: "Student Name 3",
      grade: "B",
    },
    {
      key: "4",
      id: 4,
      name: "Student Name 4",
      grade: "C",
    },
    {
      key: "5",
      id: 5,
      name: "Student Name 5",
      grade: "A+",
    },
  ];

  return (
    <div className="Select">
      <header className="Select-header">
        <Table
          columns={columns}
          dataSource={dataSource}
          rowSelection={{
            type: "checkbox",
            selectedRowKeys: alreadySelectedRows,
            onChange: (keys) => {
              setAlreadySelectedRows(keys);
            },
            onSelect: (record) => {
              console.log({ record });
            },
            getCheckboxProps: (record) => ({}),
            selections: [
              Table.SELECTION_NONE,
              Table.SELECTION_ALL,
              Table.SELECTION_INVERT,
              {
                key: "even",
                text: "Select Even Rows",
                onSelect: (allKeys) => {
                  const selectedKeys = allKeys.filter((key) => {
                    return key % 2 == 0;
                  });
                  setAlreadySelectedRows(selectedKeys);
                },
              },
              {
                key: "excellent",
                text: "Select Students with Excellent Grads",
                onSelect: (allKeys) => {
                  const selectedKeys = allKeys.filter((key) => {
                    const isExcellent = dataSource.find((student) => {
                      return student.key == key && student.grade.includes("A");
                    });
                    return isExcellent;
                  });
                  setAlreadySelectedRows(selectedKeys);
                },
              },
            ],
          }}
        ></Table>
      </header>
    </div>
  );
}

export default Select;
