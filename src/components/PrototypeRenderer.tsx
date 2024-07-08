import React from 'react';

type Element = {
    type: string;
    content?: string;
    placeholder?: string;
    label?: string;
    style?: Record<string, string>;
    items?: string[];
    title?: string;
    image?: string;
    description?: string;
    price?: string;
};

type Section = {
    backgroundColor: string;
    elements: Element[];
};

type PrototypeData = {
    grid: {
        rows: number;
        columns: number;
        gap: string;
        content: string[][];
    };
    lines: Record<string, any>;
    sections: Record<string, Section>;
};

interface PrototypeRendererProps {
    data: PrototypeData;
}

const PrototypeRenderer: React.FC<PrototypeRendererProps> = ({ data }) => {
  const renderElement = (element: Element) => {
    switch (element.type) {
    case 'text':
      return <span style={element.style}>{element.content}</span>;
    case 'textField':
      return <input placeholder={element.placeholder} style={element.style} className="border rounded p-2" />;
    case 'button':
      return <button style={element.style} className="rounded p-2">{element.label}</button>;
    case 'list':
      return (
        <ul style={element.style}>
          {element.items?.map((item, index) => (
            <li key={index} className="py-1">{item}</li>
          ))}
        </ul>
      );
    case 'card':
      return (
        <div className="border rounded p-4">
          <img src="https://media.discordapp.net/attachments/1105293053834575962/1145399317369208902/mahuzedada_brewing_developer_documentation_0d408de4-439a-4078-aecc-c9299ebc9ce8.png?width=1128&height=1128" alt={element.title} className="w-full h-48 object-cover mb-4" />
          <h3 className="font-bold mb-2">{element.title}</h3>
          <p className="mb-2">{element.description}</p>
          <span className="text-lg font-semibold">{element.price}</span>
        </div>
      );
    default:
      return null;
    }
  };

  return (
    <div className={`grid grid-rows-${data.grid.rows} grid-cols-${data.grid.columns} gap-${data.grid.gap}`}>
      {data.grid.content.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} style={data.sections[cell]?.backgroundColor ? { backgroundColor: data.sections[cell].backgroundColor } : {}}>
            {data.sections[cell]?.elements.map((element, index) => (
              <div key={index} className="mb-2">
                {renderElement(element)}
              </div>
            ))}
          </div>
        ))
      ))}
    </div>
  );
};

export default PrototypeRenderer;
