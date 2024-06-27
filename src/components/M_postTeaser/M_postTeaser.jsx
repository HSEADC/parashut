import './M_postTeaser.scss'
import React from 'react'

import A_text from '../A_text/A_text.jsx'

export default class M_searchForm extends React.Component {
  render() {
    const { title, description, url } = this.props
    return (
      <a className="M_postTeaser" href={url}>
        <A_text type="h3" text={title} />
        <A_text type="p" text={description} />
      </a> //украшение вывода
    )
  }
}
