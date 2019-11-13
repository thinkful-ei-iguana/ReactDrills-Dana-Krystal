import React from "react";
export default class Accordion extends React.Component {
  static defaultProps = {
    sections:[]
    };
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
      lastClicked: 0
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

  renderTitle = (title, index) => {
    return (
      <button key={index} onClick={this.handleClickTitle}>
        {title}
      </button>
    );
  };
  
  handleClickTitle = index => {
    console.log(this.state.lastClicked);
    this.setState({ lastClicked: index });
  };

  renderContent = content => {
    return <p>{content}</p>;
  };

  renderSection = (section,index) => {
    return(
    <li className="section">
      {this.renderTitle(section.title,index)}
      {this.renderContent(section.content)}
    </li>
    )
  };
  render() {
    console.log(typeof this.props.sections)
    const sectionsHtml = this.props.sections.map((section,index) => this.renderSection(section,index));
    return <ul className="accordion">{sectionsHtml}</ul>;
  }
}
