import React, { Component } from 'react'

class DefaultFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Booki</strong> by <a href="https://stiven.dev">Stiven Castillo</a>.
          </p>
        </div>
      </footer>
    )
  }
}

export default DefaultFooter;