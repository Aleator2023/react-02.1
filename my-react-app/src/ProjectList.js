import React, { Component } from 'react';

class ProjectList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="projects">
        {projects.map((project, index) => (
          <img key={index} src={project.img} alt={project.category} />
        ))}
      </div>
    );
  }
}

export default ProjectList;
