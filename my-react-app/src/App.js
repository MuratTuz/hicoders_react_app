
/**
 * 
 * @param {data} props is an object that comes from ./data.js contains topic and content keys and theirs values. 
 * @returns an html code including topic and content of data object
 */
function OneLine(props) {
  return (
    <div className='container'>
      <div className='row'>
        <h3>{props.data.topic}</h3>
      </div>
      <div className='row'>
        <p>{props.data.content}</p>
      </div>
    </div>
  )
}

/**
 * 
 * @param {data} props is an object that comes from ./data.js contains topic and content keys and theirs values. 
 * This component renders the object's element whose content includes an array whose length is greater than 1.
 * @returns 
 */
function List(props) {
  // create list elements
  const view = props.data.content.map((element, index) => {
    index += 1; console.log(index);
    return (
      <li key={index} >
        {element}
      </li >
    )
  });

  // creates view of component including the list created above
  return (
    <div className='container'>
      <div className='row'>
        <h3>{props.data.topic}</h3>
      </div>
      <div className='row'>
        <ul>
          {view}
        </ul>
      </div>
    </div>
  );
}

/**
 * 
 * @param {data} props is an object that comes from ./data.js contains topic and content keys and theirs values. 
 * @returns single page's view using above two components.
 */
function App(props) {
  return props.data.map((element, index) => {
    return (element.content.length === 1) ?
      <OneLine key={index} data={element} /> : <List key={index} data={element} />
  });
}

export default App;
