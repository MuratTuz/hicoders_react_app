
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
    return (
      <li key={index}>
        {element}
      </li>
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
  const panel = props.data.map(element => {
    if (element.content.length === 1)
      return <OneLine data={element} />
    else
      return <List data={element} />
  })
  return panel;
}

export default App;
