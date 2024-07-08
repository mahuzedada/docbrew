const renderMarkdown = (markdown: string) => {
  const lines = markdown.split('\n');
  const output = [];

  let isCodeBlock = false;
  let codeContent = '';

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    const linkPattern = /\[(.*?)\]\((https?:\/\/[^\s]+)\)/g;
    const matches = Array.from(line.matchAll(linkPattern));

    if (isCodeBlock) {
      if (line.startsWith('```')) {
        isCodeBlock = false;
        output.push(<pre key={index} className="bg-gray-900 p-4 rounded my-4 overflow-scroll">{codeContent.trim()}</pre>);
        codeContent = '';
      } else {
        codeContent += line + '\n';
      }
      continue;
    }

    if (matches.length > 0) {
      output.push(...matches.map((match, subIndex) => (
        <a
          key={`${index}-${subIndex}`}
          className="text-blue-500 underline flex items-center hover:bg-blue-100 p-2 rounded transition"
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-2">🔗</span>
          {match[1]}
        </a>
      )));
    } else if (line.startsWith('#### ')) {
      output.push(<h4 key={index} className="text-lg">{line.replace('#### ', '')}</h4>);
    } else if (line.startsWith('### ')) {
      output.push(<h3 key={index} className="text-xl">{line.replace('### ', '')}</h3>);
    } else if (line.startsWith('## ')) {
      output.push(<h2 key={index} className="text-2xl my-4">{line.replace('## ', '')}</h2>);
    } else if (line.startsWith('# ')) {
      output.push(<h1 key={index} className="text-3xl my-5">{line.replace('# ', '')}</h1>);
    } else if (line.startsWith('```')) {
      isCodeBlock = true;
    } else if (line.startsWith('[') && line.includes('](')) {
      const link = line.match(/\[(.*?)\]\((.*?)\)/);
      if (link) {
        output.push(<a key={index} className="text-blue-500 underline" href={link[2]}>{link[1]}</a>);
      }
    } else {
      output.push(<p key={index} className="text-base my-2">{line}</p>);
    }
  }

  return output;
};

const CheatSheet: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="p-8 max-w-3xl mx-auto rounded-xl shadow-md">
      {renderMarkdown(content)}
    </div>
  );
};

export default CheatSheet;
