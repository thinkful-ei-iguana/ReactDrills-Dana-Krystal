import React from "react";
export default class Accordion extends React.Component {
  static defaultProps = {
    sections:[]
    };
  constructor(props) {
    super(props);
    this.state = {
      lastClicked: null
    };
  }

 

  renderTitle = (title, index) => {
    return (
      <button key={index} 
      onClick={()=>this.handleClickTitle(index)}>
        {title}
      </button>
    );
  };
  
  handleClickTitle = index => {
    this.setState({ lastClicked: index });
  };

  renderContent = (content,index) => {
    return <p>{this.state.lastClicked===index && content}</p>;
  };

  renderSection = (section,index) => {
    console.log(index)
    return(
    <li className="section">
      {this.renderTitle(section.title,index)}
      {this.renderContent(section.content,index)}
    </li>
    )
  };
  render() {
    const { sections } = this.props
    console.log(sections)
    const sectionsHtml = sections.map((section,index) => this.renderSection(section,index));
    return <ul className="accordion">{sectionsHtml}</ul>;
  }
}
