import useNext from "../useNext.ts";
import { useTranslation } from 'react-i18next';
import {useContext} from "react";
import {QuestionContext} from "../context";
import emptyResponse from "../constants/emptyResponse";
import PrototypeRenderer from "../components/PrototypeRenderer";

const lngs: any = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
};

function Home(): React.ReactElement {
  const next = useNext();
  const { t, i18n } = useTranslation();
  const { setAnswers, setStoredResults } = useContext(QuestionContext);
  function start() {
    setAnswers(emptyResponse);
    setStoredResults(null);
    next();
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center items-center">
      <PrototypeRenderer data={{
        "grid": {
          "rows": 3,
          "columns": 3,
          "gap": "15px",
          "content": [
            ["header", "header", "header"],
            ["toolbox", "canvas", "properties"],
            ["footer", "footer", "footer"]
          ]
        },
        "lines": {},
        "sections": {
          "header": {
            "backgroundColor": "#333",
            "elements": [
              {
                "type": "text",
                "content": "Form Builder",
                "style": {
                  "color": "#fff",
                  "fontSize": "24px",
                  "fontWeight": "bold"
                }
              },
              {
                "type": "button",
                "label": "Save Form",
                "style": {
                  "color": "#fff",
                  "backgroundColor": "#007BFF",
                  "borderRadius": "5px"
                }
              }
            ]
          },
          "toolbox": {
            "backgroundColor": "#f5f5f5",
            "elements": [
              {
                "type": "text",
                "content": "Toolbox",
                "style": {
                  "color": "#333",
                  "fontSize": "18px",
                  "fontWeight": "bold"
                }
              },
              {
                "type": "button",
                "label": "Text Field",
                "style": {
                  "color": "#333",
                  "backgroundColor": "#e0e0e0",
                  "borderRadius": "5px"
                }
              },
              {
                "type": "button",
                "label": "Checkbox",
                "style": {
                  "color": "#333",
                  "backgroundColor": "#e0e0e0",
                  "borderRadius": "5px"
                }
              },
              {
                "type": "button",
                "label": "Radio Button",
                "style": {
                  "color": "#333",
                  "backgroundColor": "#e0e0e0",
                  "borderRadius": "5px"
                }
              }
              // ... other form elements
            ]
          },
          "canvas": {
            "backgroundColor": "#fff",
            "elements": [
              {
                "type": "text",
                "content": "Drag and drop elements here",
                "style": {
                  "color": "#aaa",
                  "fontSize": "16px"
                }
              }
            ]
          },
          "properties": {
            "backgroundColor": "#f5f5f5",
            "elements": [
              {
                "type": "text",
                "content": "Properties",
                "style": {
                  "color": "#333",
                  "fontSize": "18px",
                  "fontWeight": "bold"
                }
              },
              {
                "type": "textField",
                "placeholder": "Label...",
                "style": {
                  "border": "1px solid #ccc",
                  "borderRadius": "5px"
                }
              },
              {
                "type": "textField",
                "placeholder": "Placeholder...",
                "style": {
                  "border": "1px solid #ccc",
                  "borderRadius": "5px"
                }
              }
            ]
          },
          "footer": {
            "backgroundColor": "#333",
            "elements": [
              {
                "type": "text",
                "content": "© 2023 Form Builder App",
                "style": {
                  "color": "#fff",
                  "fontSize": "16px"
                }
              }
            ]
          }
        }
      }
      } />
      <div className="text-center">
        <p className=" text-3xl text-white mt-4 uppercase">
          {t('home.title')}
        </p>
      </div>
      <div className="bg-gradient-to-r from-rose-900 to-orange-500 p-8 rounded-xl shadow-lg text-center">
        <p className="quoted-paragraph">"Why Google it again when you've already forgotten it thrice?"</p>
      </div>
      <div className="w-full">
        <p className="text-white font-bold mb-3 text-center">
                Build personalized documentation now!
        </p>
        <button
          onClick={start}
          className="px-8 py-4 border text-white rounded w-full"
        >
                Start
        </button>
      </div>
      <div className="mt-auto text-transparent">
        {Object.keys(lngs).map((lng: string, idx) => (
          <button key={idx} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
