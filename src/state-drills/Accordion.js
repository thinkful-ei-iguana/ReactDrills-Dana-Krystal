import React from "react";

export default class Accordion extends React.Component {
    static defaultProps = { sections: [], };
    constructor(props) {
        super(props);
        this.state = {
          sections: [],
          lastClicked: 0,
        };
      }

    //   componentDidMount() {
    //     console.log('componentDidMount')
    //     this.interval = setInterval(() => {
    //       console.log('setInterval')
    //       this.setState({
    //         count: this.state.count+1
    //       })
    //     }, 1000)
    //   }

//   componentWillUnmount(){
//     clearInterval(this.interval);
//   }
  
renderTitle = (title) =>{
    return(
    <button key={index} onClick={this.handleClickTitle}>{title}</button>
    )
}

handleClickTitle = (index) =>{
this.setState({lastClicked:index})
}

renderContent = (content) =>{
    return <p>{content}</p>
}

renderSection = (section) => {
    <li className="section">
    {this.renderTitle(section.title)}
    {this.renderContent(section.content)}
    </li>
}
  render() {
    const sectionsHtml = sections.map(section => this.renderSection(section));
    return (
        <ul className="accordion"> 
       {sectionsHtml} 
      </ul>
    );
  };
}
