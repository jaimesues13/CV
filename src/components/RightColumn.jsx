
export const RightColumn = () => {
  const totalRows = [];
    for (let i = 1; i<=58; i++){
        totalRows.push(i)
    }
    
    const listItems = totalRows.map((number) =>     
      <><span>{number}</span><br /></>    
  );

  return (
    <>
        <div className="col background darkGray text-code bor-col">
          <div className="mt-2"/>
          <div className="row">
            <div className="col col-small color gray">
              {listItems}
            </div>
            <div className="col">
              <span className="color green space-center">/* Hello World, I'm Jaime! */</span> <br/>
              <span className="color gray">{`<`}<span className="color orange">about me</span>{`>`}</span><br/>
              <span className="color white">&nbsp;&nbsp;Mr. Jaime Suarez Computer Systems Engineer has experience at developing Java CRUD systems.</span><br/>
              <span className="color white">&nbsp;&nbsp;Desktop Automation (Selenium) complementing with Visual Basic for Applications.</span><br/>
              <span className="color white">&nbsp;&nbsp;Learning and practicing more about ReactJS, also he has communication and skills.</span><br/>
              <span className="color gray">{`</`}<span className="color orange">about me</span>{`>`}</span><br/> <br/>
              <span className="color green">/* Work experience */</span> <br/>
              <div className="color orange">
              <span className="color blue">const <span className="color purple">{` (start Oct-2023, Current)`}</span> {`=> `}</span><span className="color white">{`{`}</span><br/>
                &nbsp;&nbsp;&nbsp;position: "<span className="color white">Front-End Developer</span>",<br/>
                &nbsp;&nbsp;&nbsp;place: "<span className="color white">Tecnológico Superior de Jalisco</span>",<br/>
                &nbsp;&nbsp;&nbsp;activities: {`[`}<br/>
                &nbsp;&nbsp;&nbsp;'<span className="color white">Design a new Web Application using ReactJs</span>',<br/>
                &nbsp;&nbsp;&nbsp;{`]`}<br/>
                &nbsp;<span className="color white">{`}`}</span><br/>
                <br/>
                <span className="color blue">const <span className="color purple">{` (start Feb-2021, end Aug-2022)`}</span> {`=> `}</span><span className="color white">{`{`}</span><br/>
                &nbsp;&nbsp;&nbsp;position: "<span className="color white">Technical Specialist</span>",<br/>
                &nbsp;&nbsp;&nbsp;place: "<span className="color white">IBM, Mexico</span>",<br/>
                &nbsp;&nbsp;&nbsp;activities: {`[`}<br/>
                &nbsp;&nbsp;&nbsp;'<span className="color white">Java developer in charge of the resolution of defects</span>',<br/>
                &nbsp;&nbsp;&nbsp;'<span className="color white">create new segments of a Web Application.</span>',<br/>
                &nbsp;&nbsp;&nbsp;{`]`}<br/>
                &nbsp;<span className="color white">{`}`}</span><br/>
                <br/>
                &nbsp;<span className="color blue">const <span className="color purple">{` (start Jun-2020, end Dec-2020)`}</span> {`=> `}</span><span className="color white">{`{`}</span><br/>
                &nbsp;&nbsp;&nbsp;position: "<span className="color white">Infrastructure Specialist</span>",<br/>
                &nbsp;&nbsp;&nbsp;place: "<span className="color white">IBM, Mexico</span>",<br/>
                &nbsp;&nbsp;&nbsp;activities: {`[`}<br/>
                &nbsp;&nbsp;&nbsp;'<span className="color white">Security on servers, fixing middleware vulnerabilities</span>',<br/>
                &nbsp;&nbsp;&nbsp;'<span className="color white">Health checks deviations of OS and OS patching.</span>',<br/>
                &nbsp;&nbsp;&nbsp;{`]`}<br/>
                &nbsp;<span className="color white">{`}`}</span><br/>
                <br/>
                &nbsp;<span className="color blue">const <span className="color purple">{` (start May-2019, end May-2020)`}</span> {`=> `}</span><span className="color white">{`{`}</span><br/>
                &nbsp;&nbsp;&nbsp;position: "<span className="color white">Java Developer</span>",<br/>
                &nbsp;&nbsp;&nbsp;place: "<span className="color white">IBM, Mexico</span>",<br/>
                &nbsp;&nbsp;&nbsp;activities: {`[`}<br/>
                &nbsp;&nbsp;&nbsp;'<span className="color white">Custom application developer to automate processes using Java</span>',<br/>
                &nbsp;&nbsp;&nbsp;'<span className="color white">Selenium and Macros for PMO of Banamex.</span>',<br/>
                &nbsp;&nbsp;&nbsp;{`]`}<br/>
                &nbsp;<span className="color white">{`}`}</span><br/><br/>
              </div>
              <span className="color green">/* Education */</span> <br/>
              <div className="color orange">
                &nbsp;<span className="color blue">const <span className="color purple">{` (start Aug-2015, end Aug-2020)`}</span> {`=> `}</span><span className="color white">{`{`}</span><br/>
                &nbsp;&nbsp;&nbsp;Degree: "<span className="color white">Bachelor's Computer Systems Engineer</span>",<br/>
                &nbsp;&nbsp;&nbsp;Name: "<span className="color white">Instituto Tecnológico José Mario Molina Pasquel y Henríquez</span>",<br/>
                &nbsp;&nbsp;&nbsp;Diploma: "<span className="color white">Developing web and mobile apps</span>",<br/>
                &nbsp;<span className="color white">{`}`}</span><br/>
                <br/>
                &nbsp;<span className="color blue">const <span className="color purple">{` (start Aug-2012, end Aug-2015)`}</span> {`=> `}</span><span className="color white">{`{`}</span><br/>
                &nbsp;&nbsp;&nbsp;Degree: "<span className="color white">Technical Programmer</span>",<br/>
                &nbsp;&nbsp;&nbsp;Name: "<span className="color white">CECyTEJ 01 Tesistán</span>",<br/>
                &nbsp;&nbsp;&nbsp;Diploma: "<span className="color white">Developing web and mobile apps</span>",<br/>
                &nbsp;<span className="color white">{`}`}</span><br/>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}