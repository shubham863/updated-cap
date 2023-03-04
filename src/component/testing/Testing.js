import './Testing.css'
import React, { useState } from "react";

function Testing() {
  const keywords = ['auto','break','case','char','const','continue','default','double','do','else','enum','extern','float','for','goto','if','int','long','register','return','short','signed','sizeof','static','struct','switch','typedef','union','unsigned','void','volatile','while','asm','explicit','operator','this','delete','typeid','dynamic_cast','new','template','inline','mutable','typename','namespace','static_cast','friend','public','protected','using','reinterpret_cast','false','private','throw','true','virtual','bool','catch','class','const_cast','try','wchar_t',];
  const operators = ['+', '-', '*', '/', '%', '++','--','=','+=','-=','*=','/=','%=','==','!=','>','<','>=','<=','&&','||','!','&','|','^','~','<<','>>','?:','.','->'];
  const specialCharacters = ['+', '-', '*', '/', '%', '++','--','=','+=','-=','*=','/=','%=','==','!=','>','<','>=','<=','&&','||','!','&','|','^','~','<<','>>','?:','.','->','\n','\t','\r','\b','""','"'];
  const dataTypes = ['unsigned long int','unsigned short int','unsigned char','long double','unsigned int','short int','long int','char','int','float','double','string'];

  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(uploadedFile);
    reader.onload = (event) => {
      const rows = event.target.result.split("\n");

      const stringData = [];
      const operatorsData = [];
      const specialCharactersData = [];
      const variablesData= [];
      const numberData=[];
      const dataTypesData=[];

   
      rows.forEach((row, index) => {

        const items = row.trim().split(" ");
        if(items[0]!=="//"){

        const arrayString = items.join(" ");
        items.forEach((item, itemIndex) => {
          


          let isVariable=true;
  
            for(let i=0;i<operators.length;i++){
              
              if(item.includes(operators[i])){
                isVariable=false;
                operatorsData.push({
                  line: index + 1,
                  number: operators[i],
                  position: itemIndex + 1,
                });
              }
              
            }

            for(let i=0;i<dataTypes.length;i++){
              if (arrayString.includes(dataTypes[i])) {
                isVariable=false;
                dataTypesData.push({
                  line: index + 1,
                  number: dataTypes[i],
                  position: itemIndex + 1,
                });
                break;
              }
            }

            for(let i=0;i<specialCharacters.length;i++){
              if (item.includes(specialCharacters[i])) {
                isVariable=false;
                specialCharactersData.push({
                  line: index + 1,
                  number: specialCharacters[i],
                  position: itemIndex + 1,
                });
              }
            }
            for(let i=0;i<keywords.length;i++){
              if (typeof item === "string" && item.length > 0 && item===keywords[i]) {
                isVariable=false;
                stringData.push({
                  line: index + 1,
                  string: item,
                  position: itemIndex + 1,
                });
              }
            }
  
              if (!isNaN(item)) {
                isVariable=false;
                numberData.push({
                  line: index + 1,
                  number: item,
                  position: itemIndex + 1,
                });
              }
            
            if(isVariable){
              const intValue = item[0].charCodeAt(0);
              if(item[0]==='_' || (intValue>=65 && intValue<=90) || (intValue>=97 && intValue<=122)){
                const arr = item.split(/[^a-zA-Z0-9]+/);
                for(let i=0;i<arr.length;i++){
                  if(arr[i]!==""){
                  variablesData.push({
                    line: index + 1,
                    number: arr[i],
                    position: itemIndex + 1,
                  });
                }
                }
              
            }
          }
        



        });
      }
      });
      setFile(uploadedFile);
      setData({ stringData, operatorsData, specialCharactersData, variablesData,numberData,dataTypesData });
    };
  };

  return (
    <div className='tablesContainer'>
      <input id="file-upload-input" type="file"  accept=".txt,.cpp" capture="filesystem" onChange={handleFileUpload}/>
   <div className='uploadButton'>
  
      <label htmlFor="file-upload-input" className="file-upload-label" onChange={handleFileUpload}><span><h1>+</h1><h1>Upload File</h1></span></label>
  </div>
      {file && (
        
        <div className='table-container'>
          <div className='table-div'>
          <table className="table1">
            <thead>
              <tr>
                <th>Line</th>
                <th>Keywords</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {data.stringData.map((row, index) => (
                <tr key={index}>
                  <td>{row.line}</td>
                  <td>{row.string}</td>
                  <td>{row.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <div className='table-div'>
          <table className="table2">
            <thead>
              <tr>
                <th>Line</th>
                <th>Operators</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {data.operatorsData.map((row, index) => (
                <tr key={index}>
                  <td>{row.line}</td>
                  <td>{row.number}</td>
                  <td>{row.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
      <div className='table-div'>
          <table className="table3">
            <thead>
              <tr>
                <th>Line</th>
                <th>Special characters</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {data.specialCharactersData.map((row, index) => (
                <tr key={index}>
                  <td>{row.line}</td>
                  <td>{row.number}</td>
                  <td>{row.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
</div>

<div className='table-div'>
          <table className="table4">
            <thead>
              <tr>
                <th>Line</th>
                <th>Variable</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {data.variablesData.map((row, index) => (
                <tr key={index}>
                  <td>{row.line}</td>
                  <td>{row.number}</td>
                  <td>{row.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
</div>


<div className='table-div'>
          <table className="table5">
            <thead>
              <tr>
                <th>Line</th>
                <th>Data Types</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {data.dataTypesData.map((row, index) => (
                <tr key={index}>
                  <td>{row.line}</td>
                  <td>{row.number}</td>
                  <td>{row.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
</div>
        </div>
      )}
    </div>
  );
}

export default Testing;
