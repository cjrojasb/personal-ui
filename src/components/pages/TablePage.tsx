import Table from "components/shared/Table";

interface ConfigTableProps {
  label: string;
  render: (key: string) => React.ReactNode;
  sort?: (a: any, b: any) => void;
}

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    {
      label: "Name",
      render: ({ name }: any) => name,
    },
    {
      label: "Color",
      render: ({ color }: any) => <div className={`p-3 m-2 ${color}`}></div>,
    },
    {
      label: "Score",
      render: ({ score }: any) => score,
    },
  ];

  const data2 = [
    {
      value: "1",
      status: false,
    },
    {
      value: "2",
      status: true,
    },
  ];

  const config2 = [
    {
      label: "Valor",
      render: ({ value }: any) => value,
    },
    {
      label: "Estado",
      render: ({ status }: any) => (
        <p className={status ? "text-red-600" : "text-blue-600"}>
          {status ? "Es verdadero" : "Es falso"}
        </p>
      ),
    },
  ];

  return (
    <div>
      <Table
        config={config}
        configKey={({ label }) => label}
        configLabel={({ label }) => label}
        data={data}
        dataKey={({ name }) => name}
        renderConfig={(rowData, { render }) => render(rowData)}
      />
      <hr className="border-1 my-6"/>
      <Table
        config={config2}
        configKey={({ label }) => label}
        configLabel={({ label }) => label}
        data={data2}
        dataKey={({ value }) => value}
        renderConfig={(rowData, { render }) => render(rowData)}
      />
    </div>
  );
}

export default TablePage;
